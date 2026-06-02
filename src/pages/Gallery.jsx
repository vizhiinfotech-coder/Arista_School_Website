import React, { useState, useMemo, useEffect } from 'react';
import {
  Image,
  X,
  ChevronLeft,
  ChevronRight,
  FolderOpen
} from 'lucide-react';
import { galleryImages } from '../data/galleryImages';
import SEO from '../components/SEO';
import { schoolInfo } from '../data/schoolData';
import { pagesSEO } from '../data/seoData';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Prevent body scroll when slideshow modal is open
  useEffect(() => {
    if (selectedAlbum !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedAlbum]);

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(galleryImages.map(album => album.category))];
    return cats;
  }, []);

  // Filter albums by selected category
  const filteredAlbums = useMemo(() => {
    if (selectedCategory === 'All') {
      return galleryImages;
    }
    return galleryImages.filter(album => album.category === selectedCategory);
  }, [selectedCategory]);

  const openSlideshow = (albumId, imageIndex = 0) => {
    setSelectedAlbum(albumId);
    setCurrentImageIndex(imageIndex);
  };

  const closeSlideshow = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      const album = galleryImages.find(a => a.id === selectedAlbum);
      if (album) {
        setCurrentImageIndex((prev) =>
          prev === album.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      const album = galleryImages.find(a => a.id === selectedAlbum);
      if (album) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? album.images.length - 1 : prev - 1
        );
      }
    }
  };

  // Get current album and image for slideshow
  const currentAlbum = selectedAlbum ? galleryImages.find(a => a.id === selectedAlbum) : null;
  const currentImage = currentAlbum ? currentAlbum.images[currentImageIndex] : null;

  // Helper function to get image path
  const getImagePath = (album, fileName) => {
    return `/gallery/${album.albumFolder}/${fileName}`;
  };

  return (
    <div>
      <SEO
        title={pagesSEO.gallery.title}
        description={pagesSEO.gallery.description}
        keywords={pagesSEO.gallery.keywords}
        url={pagesSEO.gallery.url}
        image={pagesSEO.gallery.image}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            School Gallery
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Explore our school life, facilities, and memorable moments from {schoolInfo.name} - serving {schoolInfo.stats.students} students since {schoolInfo.stats.established}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Albums' : `${selectedCategory} Albums`}
            </h2>
            <p className="text-gray-600">
              Showing {filteredAlbums.length} {filteredAlbums.length === 1 ? 'album' : 'albums'}
            </p>
          </div>

          {filteredAlbums.length === 0 ? (
            <div className="text-center py-12">
              <FolderOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No albums found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlbums.map((album, index) => (
                <div
                  key={album.id}
                  className="group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => openSlideshow(album.id)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    {/* Album Cover Image - Always use first image */}
                    <img
                      src={album.coverImage}
                      alt={album.albumName}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        console.error(`Failed to load cover image for album: ${album.albumName}`);
                        console.error(`Attempted path: ${getImagePath(album, album.images[0].fileName)}`);
                        e.target.style.backgroundColor = '#9333ea';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                        e.target.alt = '📷 Image Loading...';
                      }}
                    />
                    {/*
                    Category Badge
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {album.category}
                      </span>
                    </div>

                    Hover Overlay
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <FolderOpen className="text-white mx-auto mb-2" size={40} />
                        <p className="text-white font-semibold">View Album</p>
                      </div>
                    </div>
                    */}

                    {/* Album Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg mb-1">{album.albumName}</h3>
                      <p className="text-purple-200 text-sm mb-2 line-clamp-2">{album.albumDescription}</p>
                      <div className="flex items-center text-white text-sm">
                        <Image size={14} className="mr-1" />
                        <span>{album.images.length} photos</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Slideshow Modal */}
      {selectedAlbum && currentAlbum && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-[100] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-black bg-opacity-50">
            <div className="text-white">
              <h2 className="text-xl font-bold">{currentAlbum.albumName}</h2>
              <p className="text-sm text-gray-300">
                {currentImageIndex + 1} of {currentAlbum.images.length}
              </p>
            </div>
            <button
              onClick={closeSlideshow}
              className="text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
          </div>

          {/* Main Image Display */}
          <div className="flex-1 flex items-center justify-center relative p-4 min-h-0">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <div className="max-w-5xl h-full max-h-full flex flex-col items-center justify-center min-h-0">
              <div className="flex-1 min-h-0 flex items-center justify-center">
                <img
                  src={getImagePath(currentAlbum, currentImage.fileName)}
                  alt={currentImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    console.error('Image failed to load:', currentImage.fileName);
                    e.target.src = '/placeholder-image.jpg'; // Add a placeholder image to public folder
                  }}
                />
              </div>
              <div className="mt-2 text-center max-w-3xl flex-shrink-0">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-1">{currentImage.title}</h3>
                <p className="text-gray-300 text-sm md:text-base line-clamp-2">{currentImage.description}</p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="bg-black bg-opacity-50 p-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-2 justify-center min-w-max mx-auto">
              {currentAlbum.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                    idx === currentImageIndex
                      ? 'ring-4 ring-purple-500 scale-110'
                      : 'ring-2 ring-gray-600 hover:ring-purple-400 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={getImagePath(currentAlbum, img.fileName)}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
