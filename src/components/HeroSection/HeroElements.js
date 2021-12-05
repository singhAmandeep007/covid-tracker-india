import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md/';

export const HeroContainer = styled.div`
   background: var(--color-dark);
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 3rem;
   height: calc(100vh + 80px);
   position: relative;
   z-index: 1;

   :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      /* add dark overlay */
      background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.5) 100%
         ),
         linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
      z-index: 2;
   }
   @media screen and (max-width: ${(props) => props.theme.bpSmall}) {
      padding: 0;
   }
`;

export const HeroBg = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
`;

export const VideoBg = styled.video`
   width: 100%;
   height: 100%;
   -o-object-fit: cover;
   /* main property to spread the video to fit the available space */
   object-fit: cover;
   background: var(--color-dark);
`;

export const HeroContent = styled.div`
   z-index: 3; // important (must be on top of video and overlay)
   max-width: 120rem;
   padding: 3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin-top: 20rem;
   height: 70vh;
   justify-content: space-evenly;
   @media screen and (max-width: ${(props) => props.theme.bpSmall}) {
      padding: 0;
      max-width: 100%;
      justify-content: center;
   }
`;

export const HeroP = styled.p`
   margin-top: 2.4rem;
   font-size: 2.4rem;
   text-align: center;
   max-width: 60rem;
   color: var(--color-secondary);

   @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
      font-size: 2.4rem;
   }
   @media screen and (max-width: ${(props) => props.theme.bpSmall}) {
      font-size: 1.8rem;
   }
`;
export const HeroBtnWrapper = styled.div`
   /* margin-top: 10em; */
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 1rem;
`;
export const ArrowForward = styled(MdArrowForward)`
   margin-left: 0.8rem;
   font-size: 2rem;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 0.8rem;
   font-size: 2rem;
`;

export const HeroTitleContainer = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   /* margin: 15rem 1rem !important; */
   height: 15rem;
   font-size: 2.4rem;
   @media screen and (max-width: ${(props) => props.theme.bpSmallest}) {
      font-size: 2rem;
   }
   @media screen and (max-width: 390px) {
      font-size: 1.5rem;
   }
`;
export const HeroTitle = styled.h1`
   color: ${({ $color }) => $color};
   font-size: ${({ $size }) => $size};
   text-align: center;
`;

export const ProfileIconLink = styled.a`
   color: #fff;
   font-size: 2.4rem;
   &:hover {
      color: #fff;
   }
`;
