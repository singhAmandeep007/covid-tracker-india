import React from 'react';
import { LogoText, LogoIcon } from './LogoElements';
import { animateScroll as scroll } from 'react-scroll';

const Logo = () => {
   const toggleHome = () => {
      scroll.scrollToTop();
   };

   return (
      <LogoText onClick={toggleHome}>
         <LogoIcon />
         Covid Tracker
      </LogoText>
   );
};

export default Logo;
