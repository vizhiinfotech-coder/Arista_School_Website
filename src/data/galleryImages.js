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
    category: "Infrastructure",
    albumName: "Classrooms",
    albumFolder: "Infrastructure/Classrooms",
    albumDescription: "Our classrooms are designed to provide a conducive learning environment, equipped with modern amenities and ample space for students to thrive.",
    coverImage: "/gallery/Infrastructure/Classrooms/img (1).jpg",
    images: [
      {
        id: 1,
        title: "Large Classrooms",
        fileName: "img (1).jpg",
        
      },
      {
        id: 2,
        title: "News Paper Reading",
        fileName: "img (2).jpg",
      },
      {
        id: 3,
        title: "Peaceful Learning Environment",
        fileName: "img (3).jpg",
      },
      {
        id: 6,
        title: "Kids Learning",
        fileName: "img (5).jpg",
      },
       {
        id: 5,
        title: "Modern Classroom",
        fileName: "img (6).jpg",
      },
      {
        id: 4,
        title: "Interactive Learning",
        fileName: "img (7).jpg",
      }
    ]
  },
  {
    id: 2,
    category: "Infrastructure",
    albumName: "Labs",
    albumFolder: "Infrastructure/Labs",
    albumDescription: "Our state-of-the-art labs provide students with hands-on learning experiences in various subjects, fostering creativity and innovation.",
    coverImage: "/gallery/Infrastructure/Labs/img (1).jpg",
    images: [
      {
        id: 1,
        title: "Robotics Lab",
        fileName: "img (1).jpg",
        
      },
      {
        id: 2,
        title: "Biology Lab",
        fileName: "img (2).jpg",
      },
       {
        id: 5,
        title: "Maths Lab",
        fileName: "img (3).jpg",
      },
      {
        id: 4,
        title: "Computer Lab",
        fileName: "img (4).jpg",
      },
      {
        id: 6,
        title: "IoT Lab",
        fileName: "img (5).jpg",
      },
    ]
  },
  {
    id: 3,
    category: "Infrastructure",
    albumName: "library",
    albumFolder: "Infrastructure/Library",
    albumDescription: "Our library is a treasure trove of knowledge, offering a wide range of books, digital resources, and a quiet space for students to explore and learn.",
    coverImage: "/gallery/Infrastructure/Library/img (1).jpg",
    images: [
      {
        id: 1,
        fileName: "img (1).jpg",
        
      },
      {
        id: 2,
        fileName: "img (2).jpg",
      },
       {
        id: 5,
        fileName: "img (3).jpg",
      },
      {
        id: 4,
        fileName: "img (4).jpg",
      },
      {
        id: 6,
        fileName: "img (5).jpg",
      },
      {
        id: 6,
        fileName: "img (6).jpg",
      },
    ]
  },
  {
    id: 4,
    category: "Events",
    albumName: "Fruits Day 2025",
    albumFolder: "Fruits_Day_2025",
    albumDescription: "Our annual Fruits Day celebration, where students showcase their creativity and learn about the importance of healthy eating through fun activities and displays.",
    coverImage: "/gallery/Fruits_Day_2025/img (1).jpg",
    images: [
      {
        id: 1,
        fileName: "img (1).jpg",
        
      },
      {
        id: 2,
        fileName: "img (2).jpg",
      },
      {
        id: 3,
        fileName: "img (3).jpg",
      },
      {
        id: 4,
        fileName: "img (4).jpg",
      },
      {
        id: 5,
        fileName: "img (5).jpg",
      },
      {
        id: 6,
        fileName: "img (6).jpg",
      },
      {
        id: 7,
        fileName: "img (7).jpg",
      },
       {
        id: 8,
        fileName: "img (8).jpg",
      },
    ]
  },
  {
    id: 5,
    category: "Events",
    albumName: "Summer Camp 2026",
    albumFolder: "Summer_Camp_2026",
    albumDescription: "Our annual Fruits Day celebration, where students showcase their creativity and learn about the importance of healthy eating through fun activities and displays.",
    coverImage: "/gallery/Summer_Camp_2026/img (1).jpg",
    images: [
      {
        id: 1,
        fileName: "img (1).jpg",
      },
      {
        id: 2,
        fileName: "img (2).jpg",
      },
      {
        id: 3,
        fileName: "img (3).jpg",
      },
      {
        id: 4,
        fileName: "img (4).jpg",
      },
      {
        id: 5,
        fileName: "img (5).jpg",
      },
      {
        id: 6,
        fileName: "img (6).jpg",
      },
      {
        id: 7,
        fileName: "img (7).jpg",
      },
      {
        id: 8,
        fileName: "img (8).jpg",
      },
      {
        id: 9,
        fileName: "img (9).jpg",
      },
      {
        id: 10,
        fileName: "img (10).jpg",
      },
      {
        id: 11,
        fileName: "img (11).jpg",
      },
      {
        id: 12,
        fileName: "img (12).jpg",
      },
      {
        id: 13,
        fileName: "img (13).jpg",
      },
      {
        id: 14,
        fileName: "img (14).jpg",
      },
      {
        id: 15,
        fileName: "img (15).jpg",
      },
      {
        id: 16,
        fileName: "img (16).jpg",
      }, 
      {
        id: 17,
        fileName: "img (17).jpg",
      },
      {
        id: 18,
        fileName: "img (18).jpg",
      },
      {
        id: 19,
        fileName: "img (19).jpg",
      },
      {
        id: 20,
        fileName: "img (20).jpg",
      }
    ]
  },
];
