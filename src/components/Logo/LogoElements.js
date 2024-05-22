import { IoTrendingUp } from "react-icons/io5";
import styled from "styled-components";

export const LogoText = styled.div`
  position: relative;
  color: var(--color-secondary);
  justify-self: center;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  z-index: 3;
  &:hover {
    color: var(--color-secondary);
  }
`;

// FIX: use transform instead of giving position
export const LogoIcon = styled(IoTrendingUp)`
  font-size: 6rem;
  /* position: absolute;
   left: 2.7rem;
   top: 0.7rem; */
  position: absolute;
  z-index: -1;
  transform: translate(40%, -10%);
  opacity: 0.7;
  color: var(--color-primary);
`;
