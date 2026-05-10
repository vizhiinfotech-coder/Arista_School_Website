import React from 'react';
import {
  Calendar,
  Users,
  Award,
  Building,
  BookOpen,
  Heart,
  Target,
  Star,
  CheckCircle,
  GraduationCap,
  Trophy,
  Globe,
  Lightbulb,
  MapPin,
  Clock
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import SEO from '../components/SEO';
import { pagesSEO } from '../data/seoData';

const About = () => {
  const leadership = [
    schoolInfo.leadership.principal,
    schoolInfo.leadership.AssistantOfficer
  ];

  const facilities = [
    {
      icon: BookOpen,
      title: "Well-Equipped Classrooms",
      description: "Spacious classrooms with proper ventilation and learning resources for effective education"
    },
    {
      icon: Globe,
      title: "Science Laboratory",
      description: "Basic science lab with essential equipment for practical learning and experiments"
    },
    {
      icon: Building,
      title: "Library",
      description: "Collection of educational books and reference materials for student learning"
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Playground and sports equipment for physical education and recreational activities"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Secure campus with proper safety measures and caring supervision for all students"
    },
    {
      icon: Users,
      title: "Computer Lab",
      description: "Basic computer facilities to introduce students to digital literacy and technology"
    }
  ];

  return (
    <div>
      <SEO
        title={pagesSEO.about.title}
        description={pagesSEO.about.description}
        keywords={pagesSEO.about.keywords}
        url={pagesSEO.about.url}
        image={pagesSEO.about.image}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            About {schoolInfo.name}
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Established in {schoolInfo.stats.established}, we have been providing quality education with {schoolInfo.stats.faculty} dedicated faculty members serving {schoolInfo.stats.students} students
          </p>
        </div>
      </section>



      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our school towards excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{leader.position}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        <span>{leader.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={14} className="mr-2" />
                        <span>{leader.education}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-3 leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to enhance the learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values and Achievements */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-purple-100 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-gray-900" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-purple-100">Caring for each student's individual needs and well-being</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-purple-100">Striving for the highest standards in education and character</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-purple-100">Building strong relationships between students, families, and staff</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-purple-100">Embracing new ideas and technologies to enhance learning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
