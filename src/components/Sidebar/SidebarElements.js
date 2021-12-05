import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 990;
   /* take all space available */
   width: 100%;
   height: 100%;
   background: var(--color-dark);
   display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
   align-items: center;
   top: 0;
   left: 0;
   transition: 0.2s ease-in-out;
   /* if isOpen is true show else hide (using opacity and top) */
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
   color: var(--color-secondary);
`;

export const Icon = styled.div`
   position: absolute;
   top: 3rem;
   right: 2.5rem;
   background: transparent;
   font-size: 2.2rem;
   cursor: pointer;
   outline: none;
`;

export const SidebarWrapper = styled.div`
   color: var(--color-secondary);
`;
export const SidebarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-auto-rows: minmax(8rem, 1fr);
   text-align: center;
   padding: 0;
   margin: 0;
   justify-items: center;
   @media screen and (max-width: ${(props) => props.theme.bpSmall}) {
      grid-auto-rows: minmax(6rem, 1fr);
   }
`;
export const SidebarLink = styled(LinkScroll)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;

   color: var(--color-secondary);
   cursor: pointer;

   &:hover {
      color: var(--color-primary);
      transition: 0.2s ease-in-out;
   }
   &.active {
      color: var(--color-primary);
   }
`;

export const SidebarBtnWrap = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 2rem;
`;
