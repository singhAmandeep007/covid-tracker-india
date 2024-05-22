import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from "./NavbarElements";
import Logo from "./../Logo";
import { DynamicButton } from "./../ButtonElement";
import NAV_LINKS_DATA from "./../../common/NavLinksData";

const Navbar = ({ toggle }) => {
  // NOTE: here based on the scroll position we will change the color of navbar
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    // if scroll position in y direction is more than 80px
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    // add listener on scroll
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <Logo />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {NAV_LINKS_DATA.map(({ id, to, title }) => {
            return (
              <NavItem key={id}>
                <NavLinks
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  {title}
                </NavLinks>
              </NavItem>
            );
          })}
        </NavMenu>

        <NavBtn>
          <DynamicButton
            component={
              <LinkScroll
                to="footer"
                smooth="true"
                duration={500}
              />
            }
            $primary
            $shadow={"#fff"}
          >
            Important Links
          </DynamicButton>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
