import React from 'react';
import styled from 'styled-components';

// NOTE: custom button component
export const DynamicButton = styled(({ component, ...props }) =>
   React.cloneElement(component, props)
)`
   // border-radius: 50px;
   background: ${({ $primary }) =>
      $primary ? 'var(--color-primary)' : 'var(--color-secondary-light)'};
   white-space: nowrap;
   padding: ${({ $big }) => ($big ? '1.3rem 2.8rem' : '1rem 2rem')};
   color: ${({ $primary }) =>
      $primary ? 'var(--color-secondary-light)' : 'var(--color-primary)'};
   font-size: ${({ $fontBig }) => ($fontBig ? '2rem' : '1.5rem')};
   outline: none;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;

   box-shadow: 8px 8px 0px ${({ $shadow }) => $shadow || '#000'};

   &:hover {
      color: ${({ $primary }) =>
         $primary ? 'var(--color-primary)' : 'var(--color-secondary-light)'};
      box-shadow: inset 0px 0px 0px 1px
         ${({ $primary }) =>
            $primary ? 'var(--color-primary)' : 'var(--color-secondary-light)'};
      transition: all 0.2s ease-in-out;
      background: ${({ $primary }) =>
         $primary ? 'var(--color-secondary-light)' : 'var(--color-primary)'};
   }
`;
