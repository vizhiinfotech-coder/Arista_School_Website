import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <img
                  src="/logo.jpg"
                  alt="Arista Secondary School Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{schoolInfo.name}</h3>
                <p className="text-gray-400 text-sm">{schoolInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Committed to providing quality education and nurturing young minds for a brighter future.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>*/}
              <a href={schoolInfo.socialMedia.instagram} target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a> 
              <a href={schoolInfo.socialMedia.youtube} target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              {/* <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li> */}
              <li><Link to="/documents" className="text-gray-400 hover:text-white transition-colors">Documents</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic Programs</h4>
            <ul className="space-y-2">
              {schoolInfo.academicPrograms.map((program, index) => (
                <li key={index}><span className="text-gray-400">{program}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-400">{schoolInfo.contact.address.street}</p>
                  <p className="text-gray-400">{schoolInfo.contact.address.city}, {schoolInfo.contact.address.state} {schoolInfo.contact.address.pincode}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-400" />
                <p className="text-gray-400">{schoolInfo.contact.phone.assistantOfficer}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-400" />
                <p className="text-gray-400">{schoolInfo.contact.email.school}</p>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-gray-400 text-sm">{schoolInfo.officeHours.weekdays}</p>
              <p className="text-gray-400 text-sm">{schoolInfo.officeHours.saturday}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 {schoolInfo.name}. All rights reserved. |
            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> |
            <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
