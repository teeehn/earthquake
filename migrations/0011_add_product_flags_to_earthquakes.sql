-- Add columns to track USGS product availability for earthquakes
-- This allows accurate filtering for earthquakes with enhanced scientific data

ALTER TABLE EarthquakeEvents ADD COLUMN has_shakemap BOOLEAN DEFAULT FALSE;
ALTER TABLE EarthquakeEvents ADD COLUMN has_moment_tensor BOOLEAN DEFAULT FALSE;
ALTER TABLE EarthquakeEvents ADD COLUMN has_focal_mechanism BOOLEAN DEFAULT FALSE;
ALTER TABLE EarthquakeEvents ADD COLUMN has_dyfi BOOLEAN DEFAULT FALSE;
ALTER TABLE EarthquakeEvents ADD COLUMN has_losspager BOOLEAN DEFAULT FALSE;
ALTER TABLE EarthquakeEvents ADD COLUMN has_finite_fault BOOLEAN DEFAULT FALSE;

-- Store the raw products JSON for future analysis and additional product types
ALTER TABLE EarthquakeEvents ADD COLUMN products_json TEXT;

-- Track whether we've fetched the detail endpoint for this earthquake
ALTER TABLE EarthquakeEvents ADD COLUMN detail_fetched BOOLEAN DEFAULT FALSE;
ALTER TABLE EarthquakeEvents ADD COLUMN detail_fetch_time INTEGER;

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_earthquakeevents_detail_fetched ON EarthquakeEvents (detail_fetched);
CREATE INDEX IF NOT EXISTS idx_earthquakeevents_has_shakemap ON EarthquakeEvents (has_shakemap);
CREATE INDEX IF NOT EXISTS idx_earthquakeevents_has_moment_tensor ON EarthquakeEvents (has_moment_tensor);
CREATE INDEX IF NOT EXISTS idx_earthquakeevents_magnitude_detail ON EarthquakeEvents (magnitude, detail_fetched);