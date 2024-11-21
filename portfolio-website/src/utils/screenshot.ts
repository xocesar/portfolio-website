
const API_KEY = process.env.SCREENSHOT_MACHINE_API_KEY || '';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CachedScreenshot {
  url: string;
  timestamp: number;
}

const cache: Map<string, CachedScreenshot> = new Map();

export function getScreenshot(websiteUrl: string, dimension: string = '1024x768'): string {
  const cached = cache.get(websiteUrl);
  const now = Date.now();

  // Return cached screenshot if it's less than 24 hours old
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.url;
  }

  // Generate new screenshot URL
  const screenshotUrl = `https://api.screenshotmachine.com?key=${API_KEY}&url=${encodeURIComponent(websiteUrl)}&dimension=${dimension}`;
  
  // Update cache
  cache.set(websiteUrl, {
    url: screenshotUrl,
    timestamp: now
  });

  return screenshotUrl;
} 