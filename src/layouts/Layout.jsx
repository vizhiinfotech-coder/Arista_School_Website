import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import Marquee from 'react-fast-marquee';
import saraswatiImg from '../assets/saraswati.png'
import AdmissionModal from '../components/AdmissionModal';


const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <PerformanceOptimizer />
      <Header />
      <main className="flex-grow pt-[100px] xs:pt-[130px] sm:pt-[120px] md:pt-[110px] lg:pt-[100px]">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <div className='fixed bottom-0 z-50 w-full'>
        <Marquee className="bg-yellow-300 p-1" speed={70} autoFill={true}>
          <div className='flex justify-center items-center gap-1'>
            {/* <img src={saraswatiImg} className='h-10' alt="" /> */}
            <p className='text-xl sm:text-lg lg:text-lg text-purple-900 font-bold'>Admissions Open for 2026 - 2027</p>
            <p className='px-20'></p>
          </div>
        </Marquee>
      </div>
      <AdmissionModal />
    </div>
  );
};

export default Layout;
