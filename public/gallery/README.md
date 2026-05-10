# Gallery Images Directory

This directory contains all the gallery images organized by albums.

## Current Albums

Each album folder should contain:
1. A `cover.jpg` file (used as the album thumbnail on the main gallery page)
2. Individual image files as defined in `src/data/galleryImages.js`

### Album Structure

```
gallery/
├── annual-day-2024/          (5 images)
├── infrastructure/           (5 images)
├── sports-day-2024/          (5 images)
├── academic-excellence/      (5 images)
├── independence-day-2024/    (5 images)
└── extra-curricular/         (5 images)
```

## Required Images per Album

### annual-day-2024/
- cover.jpg
- opening-ceremony.jpg
- dance-performance.jpg
- drama.jpg
- prize-distribution.jpg
- group-photo.jpg

### infrastructure/
- cover.jpg
- science-lab.jpg
- computer-lab.jpg
- library.jpg
- classroom.jpg
- building.jpg

### sports-day-2024/
- cover.jpg
- march-past.jpg
- 100m-race.jpg
- basketball.jpg
- football.jpg
- winners.jpg

### academic-excellence/
- cover.jpg
- science-exhibition.jpg
- math-competition.jpg
- chemistry-lab.jpg
- reading-session.jpg
- awards.jpg

### independence-day-2024/
- cover.jpg
- flag-hoisting.jpg
- anthem.jpg
- cultural-program.jpg
- speech.jpg
- celebration.jpg

### extra-curricular/
- cover.jpg
- music-class.jpg
- art-exhibition.jpg
- yoga.jpg
- robotics.jpg
- gardening.jpg

## Adding Your Images

1. Place your actual photos in the corresponding album folders
2. Make sure the file names match exactly as listed above
3. Recommended image specs:
   - Format: JPG or PNG
   - Size: 1200px × 800px (or similar 3:2 aspect ratio)
   - File size: < 500KB (optimized)

## Temporary Placeholder Images

Until you add your real photos, you can:
- Use placeholder images from https://via.placeholder.com
- Or the gallery will show fallback images if files are missing
- Check the browser console for any missing image errors

## Testing

After adding images, run:
```bash
npm run dev
```

Then navigate to http://localhost/gallery to see your albums.
