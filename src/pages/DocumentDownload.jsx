import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { FileText, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { documentsData } from '../data/documentsData';
import SEO from '../components/SEO';

const DocumentDownload = () => {
  const location = useLocation();
  const [document, setDocument] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState('loading'); // loading, success, error, not-found

  useEffect(() => {
    // Get the route from the current pathname (remove the leading slash)
    const documentRoute = location.pathname.substring(1);

    if (documentRoute) {
      // Find the document by route
      const foundDoc = documentsData.find(doc => doc.route === documentRoute);

      if (foundDoc) {
        setDocument(foundDoc);
        // Redirect directly to the file for download
        window.location.href = `/documents/${foundDoc.fileName}`;
      } else {
        setDownloadStatus('not-found');
      }
    }
  }, [location.pathname]);

  const initiateDownload = async (doc) => {
    try {
      // Simple direct download approach
      const filePath = `/documents/${doc.fileName}`;

      // Create download link and trigger immediately
      const link = document.createElement('a');
      link.href = filePath;
      link.download = doc.fileName;
      link.target = '_blank';

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Set success status
      setDownloadStatus('success');

      // Log the download for analytics
      console.log(`Document download initiated: ${doc.title} via route: ${location.pathname}`);

    } catch (error) {
      console.error('Download failed:', error);
      console.error('Error details:', error.message);
      setDownloadStatus('error');
    }
  };

  const handleRetryDownload = () => {
    if (document) {
      setDownloadStatus('loading');
      initiateDownload(document);
    }
  };

  const handleDirectDownload = async () => {
    if (document) {
      // Use the same download method as initiateDownload
      await initiateDownload(document);
    }
  };

  // If document not found, redirect to documents page
  if (downloadStatus === 'not-found') {
    return <Navigate to="/documents" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {document && (
        <SEO
          title={`Download ${document.title}`}
          description={`Download ${document.title} from Arista Secondary School. ${document.description}`}
          keywords={['download', document.title.toLowerCase(), 'school document', document.category]}
          url={`/${document.route}`}
          noindex={true}
        />
      )}
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-purple-600" />
          </div>
          
          {document && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {document.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {document.description}
              </p>
            </>
          )}

          {downloadStatus === 'loading' && (
            <div className="space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
              <p className="text-gray-600">Preparing your download...</p>
            </div>
          )}

          {downloadStatus === 'success' && (
            <div className="space-y-4">
              <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="text-green-600 font-medium mb-2">Download Started!</p>
                <p className="text-gray-600 text-sm">
                  Your file should start downloading automatically. If it doesn't, click the button below.
                </p>
              </div>
              <button
                onClick={handleRetryDownload}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download Again
              </button>
            </div>
          )}

          {downloadStatus === 'error' && (
            <div className="space-y-4">
              <div className="mx-auto h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <p className="text-red-600 font-medium mb-2">Download Failed</p>
                <p className="text-gray-600 text-sm mb-4">
                  There was an error downloading the file. Please try one of the options below.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleRetryDownload}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  <Download size={16} className="mr-2" />
                  Try Again
                </button>
                <button
                  onClick={handleDirectDownload}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  <Download size={16} className="mr-2" />
                  Open in New Tab
                </button>
              </div>
            </div>
          )}

          <div className="mt-8">
            <a
              href="/documents"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Back to Documents
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDownload;
