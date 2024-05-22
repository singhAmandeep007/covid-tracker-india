import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "rgba(0,0,0,0.75)" : "transparent")};
  height: 80px;
  /* NOTE: main part, should be same in offset in react scroll , as nav bar is shifted down by 80px*/
  margin-top: -80px;
  font-size: 1.5rem;
  /* to stay sticked on scroll to top */
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.2s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 3rem;
  /* keeps content centered */
  max-width: 110rem;
  margin-left: auto;
  margin-right: auto;
`;

export const MobileIcon = styled.div`
  /* at width > 768px display should be none */
  display: none;
  /* at width <=  768px display should be block */
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    display: block;
    font-size: 2.2rem;
    cursor: pointer;
    color: var(--color-secondary);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    /* at mobile view ,display should be none */
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

// an anchor to other sections on same page
export const NavLinks = styled(LinkScroll)`
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  // HACK: react scroll adds class active when the target matches the id (when we pass spy as true), using it we can apply the style we want to on the nav link
  &.active {
    border-bottom: 3px solid var(--color-primary);
  }
  &:hover {
    color: var(--color-primary-light);
  }
`;

export const NavBtn = styled.div`
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    /* at mobile view display should be none */
    display: none;
  }
`;
