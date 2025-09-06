-- Add computed flag for earthquakes with enhanced scientific data
-- This simplifies and speeds up sitemap filtering

ALTER TABLE EarthquakeEvents ADD COLUMN has_enhanced_data BOOLEAN DEFAULT FALSE;

-- Create index for fast querying
CREATE INDEX IF NOT EXISTS idx_earthquakeevents_has_enhanced_data ON EarthquakeEvents (has_enhanced_data);

-- Update existing records that have been fetched
-- An earthquake has enhanced data if it has any significant scientific products
UPDATE EarthquakeEvents 
SET has_enhanced_data = TRUE
WHERE detail_fetched = TRUE 
  AND (has_shakemap = TRUE 
    OR has_moment_tensor = TRUE 
    OR has_focal_mechanism = TRUE 
    OR has_finite_fault = TRUE 
    OR has_losspager = TRUE
    OR has_dyfi = TRUE);