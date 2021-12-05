import React from 'react';
import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarWrapper,
   SidebarMenu,
   SidebarBtnWrap,
   SidebarLink,
} from './SidebarElements';
import NAV_LINKS_DATA from './../../common/NavLinksData';
import { Link as LinkScroll } from 'react-scroll';
import { DynamicButton } from './../ButtonElement';

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               {NAV_LINKS_DATA.map(({ id, to, title }) => {
                  return (
                     <SidebarLink
                        to={to}
                        onClick={toggle}
                        key={id}
                        spy={true}
                        smooth="true"
                        duration={500}
                     >
                        {title}
                     </SidebarLink>
                  );
               })}
            </SidebarMenu>
            <SidebarBtnWrap>
               <DynamicButton
                  component={
                     <LinkScroll
                        onClick={toggle}
                        to="footer"
                        smooth="true"
                        duration={500}
                     />
                  }
                  $primary
                  $big
                  $shadow={'#fff'}
               >
                  Important Links
               </DynamicButton>
            </SidebarBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   );
};

export default Sidebar;
