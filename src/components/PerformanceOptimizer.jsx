import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload logo
      const logoLink = document.createElement('link');
      logoLink.rel = 'preload';
      logoLink.href = '/logo.jpg';
      logoLink.as = 'image';
      document.head.appendChild(logoLink);

      // Preload critical fonts if using Google Fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.onload = function() { this.rel = 'stylesheet'; };
      document.head.appendChild(fontLink);
    };

    // Lazy load images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.defer = true;
      });
    };

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      // Monitor Core Web Vitals
      try {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }).catch(error => {
          console.log('Web Vitals not available:', error);
        });
      } catch (error) {
        console.log('Web Vitals import failed:', error);
      }
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    };

    // Critical resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'images.unsplash.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        if (domain.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Image optimization
    const optimizeImages = () => {
      // Add loading="lazy" to images below the fold
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index > 2) { // Skip first 3 images (likely above the fold)
          img.loading = 'lazy';
        }
      });

      // Add proper alt attributes for SEO
      images.forEach(img => {
        if (!img.alt) {
          img.alt = 'Arista Secondary School';
        }
      });
    };

    // Critical CSS inlining (for production)
    const inlineCriticalCSS = () => {
      // This would typically be done at build time
      // For now, we ensure critical styles are loaded first
      const criticalStyles = `
        /* Critical above-the-fold styles */
        body { margin: 0; font-family: Inter, sans-serif; }
        .header { position: fixed; top: 0; width: 100%; z-index: 50; }
        .hero { height: 100vh; }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalStyles;
      document.head.insertBefore(style, document.head.firstChild);
    };

    // Execute optimizations
    preloadCriticalResources();
    addResourceHints();
    optimizeImages();
    
    // Delay non-critical optimizations
    setTimeout(() => {
      lazyLoadImages();
      optimizeThirdPartyScripts();
      addPerformanceMonitoring();
      // registerServiceWorker(); // Uncomment when service worker is implemented
    }, 1000);

    // Cleanup function
    return () => {
      // Clean up any observers or listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
