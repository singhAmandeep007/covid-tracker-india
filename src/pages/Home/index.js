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

               <HeroSection />

               <OverviewSection />

               <InfoSection {...homeObjOne} />

               <InfoSection {...homeObjTwo} />

               <InfoSection {...homeObjThree} />

               <InfoSection {...homeObjFour} />

               <FaqSection />

               <Footer />
            </main>
         </ThemeProvider>
      </>
   );
}

export default Home;
