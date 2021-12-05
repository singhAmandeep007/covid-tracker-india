import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Video from '../../videos/video.mp4';
import { DynamicButton } from './../ButtonElement';
import { IoTrendingUp } from 'react-icons/io5';

import {
   HeroContainer,
   HeroBg,
   VideoBg,
   HeroContent,
   HeroTitleContainer,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight,
   ProfileIconLink,
} from './HeroElements';
import { FaLinkedin } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
   const [hover, setHover] = useState(false);
   const onHover = () => {
      setHover(!hover);
   };

   return (
      <HeroContainer id="home">
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
         </HeroBg>
         <HeroContent>
            <HeroTitleContainer>
               <h1 className="hero-title">
                  <span>
                     Covid{'   '}
                     Tracker
                  </span>
                  <IoTrendingUp className="trending-arrow" />
               </h1>

               <p className="hero-lead">
                  <span className="hero-lead-madeby">
                     <span>A project by Amandeep</span>
                     <ProfileIconLink
                        style={{ display: 'flex' }}
                        href="https://www.linkedin.com/in/amandeep-singh-0803/"
                        aria-label="Linkedin"
                        target="_blank"
                        rel="author"
                     >
                        <FaLinkedin />
                     </ProfileIconLink>
                  </span>
               </p>
            </HeroTitleContainer>
            <HeroBtnWrapper>
               {/* custom button */}
               <DynamicButton
                  component={
                     <Link
                        to="/dashboard"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                     />
                  }
                  $primary={true}
                  $big
                  $shadow={'#fff'}
               >
                  Dashboard {hover ? <ArrowForward /> : <ArrowRight />}
               </DynamicButton>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   );
};

export default HeroSection;
