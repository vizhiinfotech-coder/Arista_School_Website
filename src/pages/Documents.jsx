import React, { useState } from 'react';
import {
  FileText,
  Download,
  Search
} from 'lucide-react';
import { documentsData } from '../data/documentsData';
import SEO from '../components/SEO';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documentsData.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });



  return (
    <div>
      <SEO
        title="Documents"
        description="Download important school documents, certificates, and forms from Arista Secondary School. Access affiliation letters, trust certificates, NOC, academic calendars, fee structure, and more official documents."
        keywords={['school documents', 'certificates', 'download', 'affiliation letter', 'trust certificate', 'NOC', 'academic calendar', 'fee structure', 'PTA', 'SMC']}
        url="/documents"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            School Documents
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Access important school documents, certificates, and forms. All documents are available for download.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              Showing {filteredDocuments.length} of {documentsData.length} documents
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
              <p className="text-gray-600">Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => (
                <div
                  key={doc.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {/* Document Header */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <FileText className="text-purple-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Document Info */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {doc.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={`/${doc.route}`}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-decoration-none"
                    title={`Download ${doc.title}`}
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Documents;