import React from 'react';
import {
   InfoContainer,
   InfoWrapper,
   InfoRow,
   Column1,
   Column2,
   TextWrapper,
   TopLine,
   Heading,
   Subtitle,
   BtnWrap,
   Img,
   ImgWrap,
} from './InfoElements';
import { DynamicButton } from './../ButtonElement';
// NOTE: using these props we can customise the component
const InfoSection = ({
   lightBg,
   id,
   imgStart,
   headline,
   description,
   buttonLabel,
   btnLink,
   img,
   alt,
   topLine,
   lightText,
   darkText,
   primary,
}) => {
   return (
      <InfoContainer id={id} lightBg={lightBg}>
         <InfoWrapper>
            <InfoRow imgStart={imgStart}>
               <Column1>
                  <TextWrapper>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>
                        <span>{headline}</span>
                     </Heading>
                     <Subtitle darkText={darkText}>{description}</Subtitle>
                     <BtnWrap>
                        <DynamicButton
                           component={
                              <a
                                 href={btnLink}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 {buttonLabel}
                              </a>
                           }
                           $primary={primary}
                           $shadow={lightBg ? '#000' : '#fff'}
                        />
                     </BtnWrap>
                  </TextWrapper>
               </Column1>
               <Column2>
                  <ImgWrap>
                     <Img src={img} alt={alt} />
                  </ImgWrap>
               </Column2>
            </InfoRow>
         </InfoWrapper>
      </InfoContainer>
   );
};

export default InfoSection;
