import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Calendar,
  Users,
  GraduationCap
} from 'lucide-react';
import { schoolInfo, departments, contactInfo } from '../data/schoolData';
import SEO from '../components/SEO';
import { sendContactEmail, validateContactForm } from '../config/emailjs';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const contactInfoWithIcons = [
    contactInfo[0] && {
      icon: Phone,
      ...contactInfo[0]
    },
    contactInfo[1] && {
      icon: Mail,
      ...contactInfo[1]
    },
    contactInfo[2] && {
      icon: MapPin,
      ...contactInfo[2]
    },
    contactInfo[3] && {
      icon: Clock,
      ...contactInfo[3]
    }
  ].filter(Boolean);

  const departmentsWithIcons = [
    departments[0] && {
      icon: GraduationCap,
      ...departments[0]
    },
    departments[1] && {
      icon: Users,
      ...departments[1]
    },
    departments[2] && {
      icon: Calendar,
      ...departments[2]
    },
    departments[3] && {
      icon: Building,
      ...departments[3]
    }
  ].filter(Boolean);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // Validate form data
      const validation = validateContactForm(data);
      if (!validation.isValid) {
        const errorMessages = Object.values(validation.errors).join('\n');
        alert(`Please fix the following errors:\n${errorMessages}`);
        setIsLoading(false);
        return;
      }

      // Send email using EmailJS configuration
      const result = await sendContactEmail(data);

      if (result.success) {
        setIsSubmitted(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert(result.message);
      }

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again or contact us directly at mrspublicschool456@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description={`Contact ${schoolInfo.name} in ${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}. Get in touch with our principal, administration, or visit us at ${schoolInfo.contact.address.full}. Phone: ${schoolInfo.contact.phone.principal}, Email: ${schoolInfo.contact.email.school}`}
        keywords={['contact us', 'school address', 'phone number', 'email', 'location', 'visit school', 'admission inquiry']}
        url="/contact"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Located in {schoolInfo.contact.address.city}, {schoolInfo.contact.address.state}. Get in touch with us for admissions, inquiries, or any assistance you need.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      {...register('subject', { required: 'Please select a subject' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="facilities">Facilities & Infrastructure</option>
                      <option value="transportation">Transportation</option>
                      <option value="fees">Fee Information</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your message here..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help with any questions you may have. Feel free to reach out
                    to us through any of the following methods.
                  </p>
                </div>

                {contactInfoWithIcons.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="text-purple-600" size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex justify-between">
                            <span className="text-gray-600">{detail.label}:</span>
                            <span className="text-gray-900 font-medium">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      {departmentsWithIcons.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact by Department
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Reach out to the specific department for faster assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departmentsWithIcons.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-gray-600 mb-4">{dept.description}</p>
                      <div className="space-y-2">
                        {dept.phone && (
                          <div className="flex items-center text-sm">
                            <Phone size={14} className="text-purple-600 mr-2" />
                            <a href={`tel:${dept.phone}`} className="text-purple-600 hover:underline">
                              {dept.phone}
                            </a>
                          </div>
                        )}
                        {dept.head && (
                          <div className="flex items-center text-sm">
                            <GraduationCap size={14} className="text-purple-600 mr-2" />
                            <span className="text-gray-700">Head: {dept.head}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* Map and Directions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h2>
            <p className="text-gray-600 text-lg">
              Located in {schoolInfo.contact.address.city}, {schoolInfo.contact.address.state}, easily accessible by road
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Google Maps Embed */}
            <div data-aos="fade-right">
            <div className="w-full h-0 relative pb-[56.25%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.622004318475!2d77.42540508902209!3d11.397227031617364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91753483a7b1d%3A0xe242172c0c71b655!2sMRS%20Public%20School!5e1!3m2!1sen!2sin!4v1753950582951!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arista Secondary School Location"
              ></iframe>  
          </div>

            </div>

            {/* Directions */}
            {/* <div data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">By Car</h4>
                    <p className="text-gray-600">
                      Take Highway 101 to Education Street exit. The school is located
                      2 blocks north on the right side. Parking available on campus.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">By Public Transport</h4>
                    <p className="text-gray-600">
                      Bus routes 15, 22, and 45 stop directly in front of the school.
                      Metro station "Education Center" is a 5-minute walk away.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Landmarks</h4>
                    <p className="text-gray-600">
                      Near Learning City Library and opposite the Community Center.
                      Look for our distinctive blue and white school building.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Visitor Information</h4>
                  <p className="text-blue-800 text-sm">
                    All visitors must check in at the main office. Please bring a valid ID
                    and allow extra time for security procedures.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
