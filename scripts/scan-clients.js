import fs from 'fs';
import path from 'path';

/**
 * Script to automatically scan public folder and generate clients data
 * Run this script whenever you add new files: node scripts/scan-clients.js
 */

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Client configuration - defines which folders to scan
const CLIENTS_CONFIG = [
  {
    id: "snow-spoon",
    title: "Snow Spoon",
    sector: "food-beverage",
    category: "Cafe / Desserts",
    description: "Desserts, shakes, beverages, fast food. 4.4⭐ Rating.",
    location: "Puttur, Karnataka",
    folder: "snow-spoon"
  },
  {
    id: "ss-masala",
    title: "SS Masala",
    sector: "food-beverage",
    category: "Packaged Food Products",
    description: "Legacy food manufacturing brand since 1972.",
    location: "Karnataka",
    folder: "ss-masala"
  },
  {
    id: "naturya",
    title: "Naturya",
    sector: "food-beverage",
    category: "Fresh & Natural Foods",
    description: "ISO 9001:2015 certified, 100% natural, preservative-free.",
    location: "Udupi, Karnataka",
    folder: "naturya"
  },
  {
    id: "skyline-estates",
    title: "Skyline Estates",
    sector: "real-estate",
    category: "Luxury Residential",
    description: "Premium 3BHK apartments in prime location with world-class amenities.",
    location: "Bangalore, Karnataka",
    folder: "skyline-estates"
  },
  {
    id: "royal-residency",
    title: "Royal Residency",
    sector: "real-estate",
    category: "Premium Villas",
    description: "Exclusive villa community with private gardens and swimming pools.",
    location: "Mysore, Karnataka",
    folder: "royal-residency"
  },
  {
    id: "urban-heights",
    title: "Urban Heights",
    sector: "real-estate",
    category: "Commercial Spaces",
    description: "Modern office spaces designed for startups and enterprises.",
    location: "Mangalore, Karnataka",
    folder: "urban-heights"
  },
  {
    id: "golden-ornaments",
    title: "Golden Ornaments",
    sector: "jewellery",
    category: "Traditional Gold Jewelry",
    description: "Handcrafted gold jewelry with heritage designs passed down generations.",
    location: "Mysore, Karnataka",
    folder: "golden-ornaments"
  },
  {
    id: "diamond-dreams",
    title: "Diamond Dreams",
    sector: "jewellery",
    category: "Contemporary Diamond Jewelry",
    description: "Modern diamond designs for the contemporary woman.",
    location: "Bangalore, Karnataka",
    folder: "diamond-dreams"
  },
  {
    id: "silver-craft",
    title: "Silver Craft",
    sector: "jewellery",
    category: "Silver & Antique Jewelry",
    description: "Exquisite silver craftsmanship with traditional and modern designs.",
    location: "Udupi, Karnataka",
    folder: "silver-craft"
  }
];

const sectors = {
  "food-beverage": {
    label: "Food & Beverage",
    color: "#f59e0b",
    twColor: "sector-fb"
  },
  "real-estate": {
    label: "Real Estate",
    color: "#3b82f6",
    twColor: "sector-realestate"
  },
  "jewellery": {
    label: "Jewellery",
    color: "#fbbf24",
    twColor: "sector-jewellery"
  }
};

function getFilesFromDir(dirPath, basePath = dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const files = [];
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      files.push(...getFilesFromDir(fullPath, basePath));
    } else {
      const ext = path.extname(item).toLowerCase();
      // Support common image and video formats
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.mov', '.webm'].includes(ext)) {
        // Get relative path from basePath
        const relativePath = path.relative(basePath, fullPath);
        files.push(relativePath);
      }
    }
  }
  
  return files.sort();
}

function scanClient(clientConfig) {
  const clientPath = path.join(PUBLIC_DIR, clientConfig.folder);
  
  if (!fs.existsSync(clientPath)) {
    console.log(`⚠️  Folder not found: ${clientConfig.folder}`);
    return null;
  }

  const postersPath = path.join(clientPath, 'posters');
  const videosPath = path.join(clientPath, 'videos');
  const thumbnailsPath = path.join(clientPath, 'thumbnails');

  const posters = getFilesFromDir(postersPath);
  const videos = getFilesFromDir(videosPath);
  const thumbnails = getFilesFromDir(thumbnailsPath);

  // Find main thumbnail for the client card
  const mainThumbnail = thumbnails.find(f => 
    f.toLowerCase().includes('main') || 
    f.toLowerCase().includes('thumbnail') ||
    f.toLowerCase().includes('thumb-main')
  ) || thumbnails[0] || '';

  const content = [];
  let idCounter = 1;

  // Add videos
  videos.forEach((video, index) => {
    const videoName = path.basename(video, path.extname(video));
    // Find matching thumbnail or use a generic one
    const videoThumbnail = thumbnails.find(f => 
      f.toLowerCase().includes(videoName.toLowerCase()) ||
      f.toLowerCase().includes(`video-thumb-${index + 1}`) ||
      f.toLowerCase().includes(`video${index + 1}`)
    ) || thumbnails[0] || '';

    // Convert Windows path separators to forward slashes for URLs
    const videoPath = video.replace(/\\/g, '/');
    const thumbPath = videoThumbnail ? videoThumbnail.replace(/\\/g, '/') : '';
    
    content.push({
      id: idCounter++,
      type: "video",
      src: `/${clientConfig.folder}/videos/${videoPath}`,
      thumbnail: thumbPath ? `/${clientConfig.folder}/thumbnails/${thumbPath}` : ''
    });
  });

  // Add posters
  posters.forEach((poster, index) => {
    const posterName = path.basename(poster, path.extname(poster));
    // Find matching thumbnail or use a generic one
    const posterThumbnail = thumbnails.find(f => {
      const thumbName = path.basename(f, path.extname(f));
      return thumbName.toLowerCase().includes(posterName.toLowerCase()) ||
        f.toLowerCase().includes(`poster-thumb-${index + 1}`) ||
        f.toLowerCase().includes(`poster${index + 1}`);
    }) || thumbnails[0] || '';

    // Convert Windows path separators to forward slashes for URLs
    const posterPath = poster.replace(/\\/g, '/');
    const thumbPath = posterThumbnail ? posterThumbnail.replace(/\\/g, '/') : '';

    content.push({
      id: idCounter++,
      type: "poster",
      src: `/${clientConfig.folder}/posters/${posterPath}`,
      thumbnail: thumbPath ? `/${clientConfig.folder}/thumbnails/${thumbPath}` : ''
    });
  });

  // Convert Windows path separators to forward slashes for URLs
  const mainThumbPath = mainThumbnail ? mainThumbnail.replace(/\\/g, '/') : '';
  
  return {
    id: clientConfig.id,
    title: clientConfig.title,
    sector: clientConfig.sector,
    category: clientConfig.category,
    description: clientConfig.description,
    location: clientConfig.location,
    thumbnail: mainThumbPath ? `/${clientConfig.folder}/thumbnails/${mainThumbPath}` : '',
    content: content
  };
}

function generateClientsFile() {
  console.log('🔍 Scanning client folders...\n');

  const clients = [];
  
  CLIENTS_CONFIG.forEach(config => {
    const client = scanClient(config);
    if (client) {
      clients.push(client);
      console.log(`✅ ${config.title}: ${client.content.length} items found`);
      console.log(`   📁 ${client.content.filter(c => c.type === 'poster').length} posters`);
      console.log(`   🎥 ${client.content.filter(c => c.type === 'video').length} videos`);
    }
  });

  const output = `// Auto-generated by scripts/scan-clients.js
// Run 'npm run scan-clients' to regenerate after adding new files

export const clients = ${JSON.stringify(clients, null, 4)};

export const sectors = ${JSON.stringify(sectors, null, 4)};
`;

  const outputPath = path.join(process.cwd(), 'src', 'data', 'clients.js');
  fs.writeFileSync(outputPath, output);
  
  console.log(`\n✨ Successfully updated ${outputPath}`);
  console.log(`📊 Total clients: ${clients.length}`);
  console.log(`📁 Total content items: ${clients.reduce((acc, c) => acc + c.content.length, 0)}`);
}

// Run the scanner
generateClientsFile();
