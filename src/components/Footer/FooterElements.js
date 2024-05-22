import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--color-dark-light);
  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%); //prefix
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
`;
export const FooterWrap = styled.div`
  padding: 3.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    padding-top: 3.2rem;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5rem;
  text-align: left;
  width: 16rem;
  box-sizing: border-box;
  color: var(--color-secondary);

  @media screen and (max-width: ${(props) => props.theme.bpSmall}) {
    margin: 0;
    padding: 1rem;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

export const TaperedFooterLinkTitle = styled(FooterLinkTitle)`
  background: linear-gradient(transparent 60%, var(--color-primary) 80%);
  display: inline;
`;
export const UsefulLink = styled.a`
  color: var(--color-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;

  &:hover {
    color: var(--color-primary);
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 100rem;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110rem;
  margin: 4rem auto 0 auto;

  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: var(--color-secondary);
  margin-bottom: 1.6rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    padding-top: 3rem;
  }
`;

export const SocialIconLink = styled.a`
  color: var(--color-secondary);
  font-size: 2.4rem;
`;
