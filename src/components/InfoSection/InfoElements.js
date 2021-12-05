import styled, { keyframes } from 'styled-components';

export const InfoContainer = styled.div`
   color: #fff;
   background: ${({ lightBg }) =>
      lightBg ? 'var(--color-secondary)' : 'var(--color-dark-)'};
   padding: 8rem 3rem;
   min-height: calc(100vh - 80px);

   -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%); //prefix
   clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
`;

export const InfoWrapper = styled.div`
   display: grid;
   z-index: 1;
   height: 100%;
   width: 100%;
   max-width: 110rem;
   margin-right: auto;
   margin-left: auto;

   justify-content: center;
`;
export const InfoRow = styled.div`
   display: grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   justify-items: center;
   /* if image should be at start or not */
   grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2'`};

   @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
      grid-template-areas: ${({ imgStart }) =>
         imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
   }
`;

const wipeEnter = keyframes`
	0% {
      opacity:0;
		transform: scale(0.1);
	}
	100% {
      opacity:1;
		transform: scale(1);
	}
}
`;

export const Column1 = styled.div`
   padding: 1.5rem;
   grid-area: col1;
`;
export const Column2 = styled.div`
   padding: 1.5rem;
   grid-area: col2;

   animation: ${wipeEnter} 1s cubic-bezier(0, 1, 0.3, 1);
   animation-delay: 0.5s;
   will-change: scale, opacity;
`;

export const TextWrapper = styled.div`
   width: 100%;
   padding: 2rem;
`;

export const TopLine = styled.p`
   color: var(--color-primary-light);
   font-size: 1.6rem;
   line-height: 1.6rem;
   font-weight: 700;
   letter-spacing: 2px;
   text-transform: uppercase;
   margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
   margin-bottom: 2.4rem;
   font-size: 3rem;
   line-height: 1.1;
   font-weight: 600;
   color: ${({ lightText }) => (lightText ? '#fff' : '#000')};
   overflow-wrap: break-word;
   word-break: break-word;
   word-wrap: break-word;

   @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
      font-size: 2.8rem;
   }
`;

export const Subtitle = styled.p`
   max-width: 90%;
   margin-bottom: 3.5rem;
   font-size: 1.6rem;
   line-height: 2.5rem;
   color: ${({ darkText }) => (darkText ? '#000' : '#fff')};
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`;
export const ImgWrap = styled.div`
   max-width: 100%;
   height: 100%;
`;

export const Img = styled.img`
   max-width: 50rem;
   max-height: 50rem;
   width: 100%;
`;
