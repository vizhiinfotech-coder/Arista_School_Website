/**
 * Gallery Images Data
 * 
 * Structure:
 * - Each album has a category, album name, and array of images
 * - Images should be placed in /public/gallery/{albumFolder}/
 * - Each image has an id, title, fileName (image file name), and description
 * 
 * To add a new album:
 * 1. Create a new folder in /public/gallery/ (e.g., /public/gallery/annual-day-2024/)
 * 2. Add your images to that folder
 * 3. Add a new entry to this galleryImages array with the album details
 * 
 * To add images to an existing album:
 * 1. Place the image in the corresponding /public/gallery/{albumFolder}/ directory
 * 2. Add a new image object to the album's images array
 */

export const galleryImages = [
  {
    id: 1,
    category: "Events",
    albumName: "Annual Day 2024",
    albumFolder: "annual-day-2024",
    albumDescription: "Celebrating our school's annual achievements with cultural performances and awards.",
    coverImage: "/gallery/annual-day-2024/cover.jpg",
    images: [
      {
        id: 1,
        title: "Lighting the Lamp",
        fileName: "cover.jpg",
        description: "Traditional lamp lighting ceremony to inaugurate the event"
      },
      {
        id: 2,
        title: "Welcome Dance",
        fileName: "photo2.jpg",
        description: "Students performing the welcome dance"
      }
    ]
  },
];
