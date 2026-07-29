import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Trophy,
  Globe,
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import SEO from '../components/SEO';
import { pagesSEO } from '../data/seoData';
import home_bg1 from '../assets/gallery/home_bg1.jpg';
import home_bg2 from '../assets/gallery/home_bg2.jpg';
import home_bg3 from '../assets/gallery/home_bg3.jpg';

import saraswatiImg from '../assets/saraswati.png'


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: home_bg1,
      title: `Welcome to ${schoolInfo.name}`,
      subtitle: `${schoolInfo.tagline} - ${schoolInfo.motto}`,
      description: "Established in 2018, we are committed to providing quality education that nurtures young minds and develops character for a successful future."
    },
    {
      image: home_bg2,
      title: "Excellence in Education",
      subtitle: "8+ Years of Educational Excellence",
      description: "With 30+ dedicated faculty members serving 200+ students, we ensure personalized attention and comprehensive learning opportunities."
    },
    {
      image: home_bg3,
      title: "Innovation in Education",
      subtitle: "From Pre-Primary to Secondary",
      description: "We offer complete education from Nursery to Class X with innovative teaching methods and a 98% success rate."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <SEO
        title={pagesSEO.home.title}
        description={pagesSEO.home.description}
        keywords={pagesSEO.home.keywords}
        url={pagesSEO.home.url}
        image={pagesSEO.home.image}
      />

      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slider Container */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(84, 7, 143, 0.7), rgba(84, 7, 143, 0.5)), url(${slide.image})`
                }}
              >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div data-aos="fade-up" data-aos-key={index}>
                      <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {slide.title.includes(schoolInfo.name) ? (
                          <>
                            Welcome to <span className="text-yellow-400">{schoolInfo.name}</span>
                          </>
                        ) : (
                          <span className="text-yellow-400">{slide.title}</span>
                        )}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-purple-100">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg mb-10 max-w-3xl mx-auto text-purple-50">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          to="/about"
                          className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                        >
                          Learn More About Us
                          <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link
                          to="/contact"
                          className="border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button> */}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Principal's Welcome Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* <div data-aos="fade-right">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                    <GraduationCap className="text-white" size={32} />
                    <img src={schoolInfo.leadership.principal.photo} alt={schoolInfo.leadership.principal.name} className="object-cover mt-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{schoolInfo.leadership.principal.name}</h3>
                    <p className="text-blue-600 font-semibold">{schoolInfo.leadership.principal.position}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "{schoolInfo.leadership.principal.description}"
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">Excellence in Education</span>
                </div>
              </div>
            </div> */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Message from Our Principal
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Welcome to {schoolInfo.name}, where education meets excellence.
                Established in {schoolInfo.stats.established}, we have been shaping young minds and
                preparing students for a bright future with our dedicated team of {schoolInfo.stats.faculty} faculty members.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <p className="text-gray-700">Experienced and qualified faculty</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <p className="text-gray-700">Modern infrastructure and facilities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <p className="text-gray-700">Holistic development approach</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <p className="text-gray-700">Strong parent-school partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Guiding principles that drive our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-purple-50 rounded-lg p-8" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {schoolInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-yellow-50 rounded-lg p-8" data-aos="fade-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {schoolInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights and Achievements */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements & Highlights
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Celebrating excellence in education and student accomplishments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{schoolInfo.stats.students}</h3>
              <p className="text-gray-300">Happy Students</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{schoolInfo.stats.yearsOfExcellence}</h3>
              <p className="text-gray-300">Years of Excellence</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{schoolInfo.stats.awards}</h3>
              <p className="text-gray-300">Awards Won</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{schoolInfo.stats.successRate}</h3>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join our family of {schoolInfo.stats.students} students and experience quality education since {schoolInfo.stats.established}.
            Contact us today to learn more about our programs and admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/documents"
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Documents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
