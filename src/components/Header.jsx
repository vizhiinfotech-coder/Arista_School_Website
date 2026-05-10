import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Documents', href: '/documents' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar - Responsive contact info */}
      <div className="bg-purple-900 text-white py-1 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-xs w-full">
            {/* Extra Small & Small: Phone only */}
            <div className="flex items-center space-x-1 xs:hidden min-w-0 overflow-hidden">
              <Phone size={12} />
              <span className="truncate max-w-[100px]">{schoolInfo.contact.phone.assistantOfficer}</span>
            </div>
            {/* Small & Medium: Phone + Email */}
            <div className="hidden xs:flex md:hidden items-center space-x-3 min-w-0 overflow-hidden">
              <div className="flex items-center space-x-1 min-w-0">
                <Phone size={12} />
                <span className="truncate max-w-[110px]">{schoolInfo.contact.phone.assistantOfficer}</span>
              </div>
              <div className="flex items-center space-x-1 min-w-0">
                <Mail size={12} />
                <span className="truncate max-w-[130px]">{schoolInfo.contact.email.school}</span>
              </div>
            </div>
            {/* Medium: Full contact info */}
            <div className="hidden md:flex lg:hidden space-x-4 min-w-0 overflow-hidden">
              <div className="flex items-center space-x-1 min-w-0">
                <Phone size={12} />
                <span className="truncate">{schoolInfo.contact.phone.assistantOfficer}</span>
              </div>
              <div className="flex items-center space-x-1 min-w-0">
                <Mail size={12} />
                <span className="truncate">{schoolInfo.contact.email.school}</span>
              </div>
            </div>
            {/* Large+: Full contact info */}
            <div className="hidden lg:flex space-x-4 min-w-0 overflow-hidden">
              <div className="flex items-center space-x-1 min-w-0">
                <Phone size={12} />
                <span className="truncate">{schoolInfo.contact.phone.assistantOfficer}</span>
              </div>
              <div className="flex items-center space-x-1 min-w-0">
                <Mail size={12} />
                <span className="truncate">{schoolInfo.contact.email.school}</span>
              </div>
            </div>
            {/* Address - Hidden on extra small, shown on small+ */}
            <div className="hidden xs:flex items-center space-x-1 min-w-0 overflow-hidden">
              <MapPin size={12} />
              <span className="truncate max-w-[200px] sm:max-w-none">
                {schoolInfo.contact.address.street}, {schoolInfo.contact.address.city}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`
          max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full
        `}
      >
        <div
          className={`
            flex justify-between items-center w-full
            py-4 xs:py-4 sm:py-2
          `}
          style={{
            minHeight: '64px', // Ensures extra height on mobile, adjust as needed
          }}
        >
          {/* Logo */}
          <div className="flex items-center flex-1 min-w-0 overflow-hidden">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 group min-w-0">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-600 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
                <img
                  src="/logo.jpg"
                  alt="Arista Secondary School Logo"
                  className="w-full h-full object-cover"
                  style={{ minWidth: 0, minHeight: 0 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden pr-2">
                <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 leading-tight truncate">
                  {schoolInfo.name}
                </p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 truncate opacity-90">
                  {schoolInfo.motto}
                </p>
              </div>
            </Link>
          </div>

          {/* Tablet Navigation - Horizontal menu for medium screens */}
          <nav className="hidden md:flex lg:hidden space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${isActive(item.href)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group ${isActive(item.href)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 xs:p-3 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} className="xs:w-6 xs:h-6" /> : <Menu size={20} className="xs:w-6 xs:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            style={{ overflow: 'hidden' }}
          />

          {/* Mobile Menu */}
          <div className="md:hidden fixed top-0 right-0 h-full w-72 xs:w-80 sm:w-96 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out overflow-hidden">
            <div className="flex flex-col h-full overflow-hidden">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border-b">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/50">
                    <Phone size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="font-medium">{schoolInfo.contact.phone.assistantOfficer}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded-lg bg-white/50">
                    <Mail size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="font-medium">{schoolInfo.contact.email.school}</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 rounded-lg bg-white/50">
                    <MapPin size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{schoolInfo.contact.address.street}, {schoolInfo.contact.address.city}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive(item.href)
                          ? 'text-purple-600 bg-purple-50 border-l-4 border-purple-600 shadow-sm'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50 hover:shadow-sm'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-purple-50">
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-sm">{schoolInfo.name}</p>
                  <p className="text-xs text-gray-600 mt-1 italic">{schoolInfo.motto}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
