const API_KEY = process.env.NEXT_PUBLIC_SCREENSHOT_MACHINE_API_KEY;

export function getScreenshot(websiteUrl: string, dimension: string = '1024x768'): string {
  if (!API_KEY) {
    console.error('Screenshot Machine API key is not configured');
    return '/placeholder-image.png';
  }

  // Basic URL parameters
  const params = new URLSearchParams({
    key: API_KEY,
    url: websiteUrl,
    dimension: dimension,
    format: 'png',
    cacheLimit: '1',
    cache: new Date().toISOString().split('T')[0]
  });

  // Construct and return the full URL
  return `https://api.screenshotmachine.com?${params.toString()}`;
} 