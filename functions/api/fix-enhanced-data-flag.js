/**
 * @file One-time fix to ensure all enriched earthquakes have the has_enhanced_data flag set correctly
 */

const jsonResponse = (data, status = 200) => {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: { "Content-Type": "application/json" },
  });
};

export async function onRequestGet(context) {
  const { env } = context;
  
  if (!env.DB) {
    return jsonResponse({ error: "Database not configured" }, 500);
  }

  try {
    // First, get stats on current state
    const beforeStats = await env.DB.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN detail_fetched = TRUE THEN 1 ELSE 0 END) as fetched,
        SUM(CASE WHEN has_enhanced_data = TRUE THEN 1 ELSE 0 END) as has_flag,
        SUM(CASE WHEN detail_fetched = TRUE AND has_enhanced_data IS NULL THEN 1 ELSE 0 END) as missing_flag
      FROM EarthquakeEvents
    `).first();

    // Update all earthquakes that have been fetched but don't have the flag set
    const updateResult = await env.DB.prepare(`
      UPDATE EarthquakeEvents 
      SET has_enhanced_data = CASE
        WHEN (has_shakemap = TRUE 
          OR has_moment_tensor = TRUE 
          OR has_focal_mechanism = TRUE 
          OR has_finite_fault = TRUE 
          OR has_losspager = TRUE
          OR has_dyfi = TRUE) THEN TRUE
        ELSE FALSE
      END
      WHERE detail_fetched = TRUE
        AND (has_enhanced_data IS NULL OR has_enhanced_data = FALSE)
        AND (has_shakemap = TRUE 
          OR has_moment_tensor = TRUE 
          OR has_focal_mechanism = TRUE 
          OR has_finite_fault = TRUE 
          OR has_losspager = TRUE
          OR has_dyfi = TRUE)
    `).run();

    // Get stats after update
    const afterStats = await env.DB.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN detail_fetched = TRUE THEN 1 ELSE 0 END) as fetched,
        SUM(CASE WHEN has_enhanced_data = TRUE THEN 1 ELSE 0 END) as has_flag,
        SUM(CASE WHEN detail_fetched = TRUE AND has_enhanced_data = TRUE THEN 1 ELSE 0 END) as enhanced_and_fetched
      FROM EarthquakeEvents
    `).first();

    return jsonResponse({
      success: true,
      message: "Enhanced data flag backfill complete",
      before: {
        total_earthquakes: beforeStats.total,
        fetched: beforeStats.fetched,
        had_flag: beforeStats.has_flag,
        missing_flag: beforeStats.missing_flag
      },
      after: {
        total_earthquakes: afterStats.total,
        fetched: afterStats.fetched,
        has_flag: afterStats.has_flag,
        enhanced_and_fetched: afterStats.enhanced_and_fetched
      },
      updated: updateResult.meta.changes || 0
    });

  } catch (error) {
    console.error(`[fix-enhanced-flag] Error: ${error.message}`, error);
    return jsonResponse({ 
      error: `Failed to fix enhanced data flags: ${error.message}` 
    }, 500);
  }
}