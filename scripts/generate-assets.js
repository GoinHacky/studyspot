const fs = require('fs');
const path = require('path');

// Minimal valid 1x1 PNG (transparent)
// This is a base64-encoded minimal PNG file
const minimalPNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate placeholder images
const assets = [
  'icon.png',
  'splash.png',
  'adaptive-icon.png',
  'favicon.png'
];

assets.forEach(asset => {
  const filePath = path.join(assetsDir, asset);
  fs.writeFileSync(filePath, minimalPNG);
  console.log(`Created: ${asset}`);
});

console.log('\n✅ Placeholder assets created!');
console.log('Note: These are minimal placeholders. Replace them with actual images for production.');



