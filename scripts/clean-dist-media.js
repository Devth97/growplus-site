import fs from "fs";

const mediaDirs = [
  "EMIRATES GOLD",
  "KOTHARRI JEWELZ",
  "SL SHET JEWELLERS",
  "SULTHAN GOLD AND DIAMONDS",
  "Paavani",
  "Muliya Jewllers/videos",
  "Nishma Delights Cafe/videos",
  "Popular Nutritions/videos",
  "snow-spoon/videos",
  "ss-masala/videos",
  "naturya/videos",
  "skyline-estates/videos",
  "royal-residency/videos",
  "urban-heights/videos",
  "golden-ornaments/videos",
  "diamond-dreams/videos",
  "silver-craft/videos",
  "Cream city/videos",
];

for (const dir of mediaDirs) {
  const target = `dist/${dir}`;
  fs.rmSync(target, { recursive: true, force: true });
  console.log(`Cleaned: ${target}`);
}
