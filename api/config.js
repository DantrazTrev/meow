export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/javascript');

  // Extract environment variables with CAT_ prefix and public variables
  const config = {};
  
  // Cat Protocol specific environment variables
  const catEnvVars = [
    'CAT_SIZE',
    'CAT_TRIANGLE_THRESHOLD', 
    'CAT_ANIMATION_DURATION',
    'CAT_BLINK_PROBABILITY',
    'TRIANGLE_RADIUS',
    'AUDIO_MEOW_BASE',
    'AUDIO_MEOW_RANGE', 
    'AUDIO_AMBIENT_BASE',
    'AUDIO_SPECIAL_BASE',
    'THEME_PRIMARY_BG',
    'THEME_PRIMARY_TEXT',
    'THEME_BORDER_COLOR',
    'THEME_SCANLINE_OPACITY',
    'ENABLE_AUDIO',
    'ENABLE_SCANLINES',
    'ENABLE_BLINKING',
    'ENABLE_ANALYTICS'
  ];

  // Public environment variables (Next.js convention)
  const publicEnvVars = [
    'NEXT_PUBLIC_GA_ID',
    'NEXT_PUBLIC_PLAUSIBLE_DOMAIN',
    'NEXT_PUBLIC_VERCEL_URL',
    'NEXT_PUBLIC_VERCEL_ENV'
  ];

  // Collect all relevant environment variables
  [...catEnvVars, ...publicEnvVars].forEach(key => {
    if (process.env[key]) {
      config[key] = process.env[key];
    }
  });

  // Add deployment information
  config.VERCEL_URL = process.env.VERCEL_URL;
  config.VERCEL_ENV = process.env.VERCEL_ENV;
  config.VERCEL_REGION = process.env.VERCEL_REGION;
  
  // Generate JavaScript that sets window.ENV
  const jsContent = `
// Auto-generated configuration from Vercel environment variables
window.ENV = ${JSON.stringify(config, null, 2)};

// Debug information
console.log('🔧 Environment configuration loaded from Vercel API');
console.log('📍 Region:', '${process.env.VERCEL_REGION || 'unknown'}');
console.log('🌍 Environment:', '${process.env.VERCEL_ENV || 'development'}');
`;

  res.status(200).send(jsContent);
}