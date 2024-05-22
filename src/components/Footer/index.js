import React from "react";
import { v4 as uuidv4 } from "uuid";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  TaperedFooterLinkTitle,
  UsefulLink,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
} from "./FooterElements";

import Logo from "./../Logo";
import USEFUL_LINKS_DATA from "./../../common/UsefulLinksData";
import LazyLoad from "./../../hooks/LazyLoad";

const SOCIAL_LINKS_DATA = [
  {
    id: uuidv4(),
    href: "https://www.google.com/search?q=COVID",
    ariaLabel: "Google",

    icon: <FcGoogle />,
  },
  {
    id: uuidv4(),
    href: "https://www.facebook.com/coronavirus_info/",
    ariaLabel: "Facebook",

    icon: <FaFacebook color="#3b5998" />,
  },

  {
    id: uuidv4(),
    href: "https://www.youtube.com/watch?v=oqFn6AHoJZQ",
    ariaLabel: "Youtube",

    icon: <FaYoutube color="#ff0000" />,
  },
  {
    id: uuidv4(),
    href: "https://twitter.com/search?q=%23covid19",
    ariaLabel: "Twitter",

    icon: <FaTwitter color="#55acee" />,
  },
  {
    id: uuidv4(),
    href: "https://www.linkedin.com/business/talent/blog/covid-19",
    ariaLabel: "LinkedIn",

    icon: <FaLinkedin color="#007bb5" />,
  },

  {
    id: uuidv4(),
    href: "https://www.instagram.com/who/?hl=en",
    ariaLabel: "Instagram",

    icon: <FaInstagram color="#e95950" />,
  },
];

const Footer = () => {
  return (
    <LazyLoad id="footer">
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            {USEFUL_LINKS_DATA.map(({ id, FooterTitle, links }) => {
              return (
                <FooterLinksWrapper key={id}>
                  <FooterLinkItems>
                    <TaperedFooterLinkTitle>{FooterTitle}</TaperedFooterLinkTitle>
                    {links.map(({ id, href, ariaLabel, text }) => {
                      return (
                        <UsefulLink
                          key={id}
                          href={href}
                          target="_blank"
                          aria-label={ariaLabel}
                          rel="external"
                        >
                          {text}
                        </UsefulLink>
                      );
                    })}
                  </FooterLinkItems>
                </FooterLinksWrapper>
              );
            })}
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <Logo />
              <div role="list">
                <span
                  role="listitem"
                  style={{ color: "#fff" }}
                >
                  Developed by Amandeep
                </span>
              </div>
              <SocialIcons>
                {SOCIAL_LINKS_DATA.map(({ id, href, icon, ariaLabel }) => {
                  return (
                    <SocialIconLink
                      key={id}
                      href={href}
                      target="_blank"
                      aria-label={ariaLabel}
                      rel="external"
                    >
                      {icon}
                    </SocialIconLink>
                  );
                })}
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </LazyLoad>
  );
};

export default Footer;
