-- Migration to add storage_provider column to videos table
-- Run this in your Supabase SQL Editor:
ALTER TABLE videos ADD COLUMN IF NOT EXISTS storage_provider TEXT DEFAULT 'cloudinary';

-- Update existing records to 'cloudinary' if null
UPDATE videos SET storage_provider = 'cloudinary' WHERE storage_provider IS NULL;
