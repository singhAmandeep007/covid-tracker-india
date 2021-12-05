import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
   homeObjOne,
   homeObjTwo,
   homeObjThree,
   homeObjFour,
} from '../../components/InfoSection/Data';

import HeroSection from '../../components/HeroSection';
import OverviewSection from '../../components/OverviewSection';
import InfoSection from '../../components/InfoSection';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import FaqSection from '../../components/FaqSection';
import Footer from '../../components/Footer';

import LazyLoad from './../../hooks/LazyLoad';

import { GlobalStyle } from './GlobalStyles';

import breakPoints from './Breakpoints';

const theme = {
   ...breakPoints,
};

function Home() {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <main style={{ background: 'var(--color-dark)' }}>
               <Sidebar isOpen={isOpen} toggle={toggle} />
               <Navbar toggle={toggle} />
               <LazyLoad rootMargin={'100px'}>
                  <HeroSection />
               </LazyLoad>
               <LazyLoad rootMargin={'-100px'} delay={250}>
                  <OverviewSection />
               </LazyLoad>

               <LazyLoad rootMargin={'100px'}>
                  <InfoSection {...homeObjOne} />
               </LazyLoad>
               <LazyLoad rootMargin={'100px'}>
                  <InfoSection {...homeObjTwo} />
               </LazyLoad>
               <LazyLoad rootMargin={'100px'}>
                  <InfoSection {...homeObjThree} />
               </LazyLoad>
               <LazyLoad rootMargin={'100px'}>
                  <InfoSection {...homeObjFour} />
               </LazyLoad>

               <LazyLoad rootMargin={'100px'}>
                  <FaqSection />
               </LazyLoad>
               <LazyLoad rootMargin={'100px'}>
                  <Footer />
               </LazyLoad>
            </main>
         </ThemeProvider>
      </>
   );
}

export default Home;
