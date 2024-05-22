import styled, { keyframes, css } from "styled-components";
import OverviewCard from "./OverviewCard";

export const OverviewContainer = styled.div`
  color: var(--color-secondary--light);
  background: var(--color-secondary);
  padding: 8rem 3rem;
  min-height: calc(100vh - 80px);

  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%); //prefix
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    padding: 10rem 1rem;
  }
`;

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 110rem;
  margin-right: auto;
  margin-left: auto;

  justify-content: space-between;
`;
const wordFadeIn = keyframes`
  0% {
    opacity: 100%;
    content: 'is a contagious disease.';
  }
  
  6.66% {
    opacity: 0%;
  }
  
  13.33%{
    opacity: 0%;
  }
  
  20% {
    opacity: 100%;
    content: 'can be asymptomatic.';
  }
  
  26.66% {
    opacity: 0%;
  }
  
  33.33% {
    opacity: 0%;
  }
  
  40% {
    opacity: 100%;
    content: 'causes respiratory illness.';
  }
  
  46.66% {
    opacity: 0%;
  }
  
  53.33% {
    opacity: 0%;
  }
  
  60% {
    opacity: 100%;
    content: 'have different variants.';
  }
  
  66.66% {
    opacity: 0%;
  }
  
  73.33% {
    opacity: 0%;
  }
  
  80% {
    opacity: 100%;
    content: 'has caused a pandemic.';
  }
  
  86.66% {
    opacity: 0%;
  }
  
  93.33% {
    opacity: 0%;
  }
  
  100% {
    opacity: 100%;
    content: 'originated from China.';
  }`;

export const OverviewTitle = styled.div`
  color: var(--color-primary);
  text-align: center;
  justify-self: center;
  align-self: center;
  margin-bottom: 1rem;

  min-width: 60%;

  h1 {
    color: var(--color-secondary-light);
    background: var(--color-primary);
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 700;
    padding: 1.5rem;
    text-align: left;

    &::after {
      content: "";
      animation-name: ${wordFadeIn};
      animation-duration: 18s;
      animation-iteration-count: infinite;
      -webkit-animation-name: ${wordFadeIn};
      -webkit-animation-duration: 18s;
      -webkit-animation-iteration-count: infinite;
    }
  }
  p {
    border-bottom: 1px solid var(--color-primary);
    font-weight: 600;
    display: block;
  }
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    h1 {
      font-size: 2.5rem;
      line-height: 2rem;
    }

    width: 100%;
  }
`;

export const OverviewContent = styled.div`
  display: grid;

  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 5rem);
  // NOTE: define perspective on parent
  perspective: 1000px;
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    grid-template-rows: repeat(8, 8rem);
  }
`;

const swingIn = (order, selectedCardNum) => {
  return keyframes`
	from {
		transform: ${
      order === 1
        ? "translateX(50%) scale(1.2)"
        : order === 2
          ? "translateX(25%) scale(1.1)"
          : order === 3 && selectedCardNum < 3
            ? "translateX(-50%) scale(0.6)"
            : order === 3 && selectedCardNum > 3
              ? "translateX(50%) scale(0.6)"
              : order === 4
                ? "translateX(-25%) scale(1.1)"
                : order === 5
                  ? "translateX(-50%) scale(1.2)"
                  : "scale(0.2)"
    };
		z-index:${order === 1 ? 4 : order === 3 && selectedCardNum === "initial" ? 5 : order === 3 ? 1 : order === 5 ? 4 : 2};
	}
	50%{
		transform: ${
      order === 1
        ? "translateX(-75%) scale(1)"
        : order === 2
          ? "translateX(-25%) scale(0.9)"
          : order === 3 && selectedCardNum < 3
            ? "translateX(50%) scale(0.8)"
            : order === 3 && selectedCardNum > 3
              ? "translateX(-50%) scale(0.8)"
              : order === 4
                ? "translateX(25%) scale(0.9)"
                : order === 5
                  ? "translateX(75%) scale(1)"
                  : "scale(0.6)"
    };
		z-index:${order === 1 ? 1 : order === 3 && selectedCardNum === "initial" ? 4 : order === 3 ? 3 : order === 5 ? 1 : 2};
	}
	to {
		transform: ${
      order === 1
        ? "translateX(0%) scale(0.8)"
        : order === 2
          ? "translateX(0%) scale(0.9)"
          : order === 3 && selectedCardNum < 3
            ? "translateX(0%) scale(1.1)"
            : order === 3 && selectedCardNum > 3
              ? "translateX(0%) scale(1.1)"
              : order === 4
                ? "translateX(0%) scale(0.9)"
                : order === 5
                  ? "translateX(0%) scale(0.8)"
                  : "scale(0.8)"
    };
	}`;
};

const getGridStyleProperties = css`
  grid-area: ${({ $order }) => {
    switch ($order) {
      case 1:
        return "3/1/7/4";
      case 2:
        return "2/2/8/5";
      case 3:
        return "1/3/-1/9";
      case 4:
        return "2/7/8/10";
      case 5:
        return "3/8/7/-1";
      default:
        return;
    }
  }};
  z-index: ${({ $order }) => ($order === 2 || $order === 4 ? 2 : $order === 3 ? 3 : 1)};
  animation: ${({ $order, $selectedCardNum }) => swingIn($order, $selectedCardNum)}
    ${({ $animationTime }) => $animationTime}s;

  animation-timing-function: cubic-bezier(
    1,
    0.01,
    0.72,
    0.78
  ); /* important to use a symmetrical timing function (linear also works) */
  animation-fill-mode: forwards;
`;

const backgroundFilter = css`
  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
  }
  @supports not (backdrop-filter: blur(10px)) {
    background: rgba(255, 255, 255, 0.9);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(20px);
      z-index: -1;
    }
  }
`;

export const OverviewCardContainer = styled.div`
  // NOTE: mozilla fallback
  ${backgroundFilter}
  cursor: pointer;
  ${getGridStyleProperties}
`;

export const StyledOverviewCard = styled(OverviewCard)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 1rem;
  box-shadow: var(--color-primary-light) 0px 25px 0px -20px;

  background-color: #ffffff61;
  border: 1px solid var(--color-primary);

  transition: background-color 0.2s ease-in;

  color: var(--color-primary);

  ${({ $order }) =>
    $order === 3 &&
    css`
      &:hover {
        background-color: var(--color-secondary);
        .textContainer {
          height: 50%;
          background-color: var(--color-primary-light);
          color: var(--color-secondary-light);
          p {
            padding: 0.5rem;
            font-size: 1.8rem;
            line-height: 2rem;
          }
        }
      }
    `}

  .imgContainer {
    flex-grow: 2;
    // for firefox
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      padding: 1rem;
    }

    // NOTE: making the image occupy the grid area and prevent overflow
    object-fit: fill;
    overflow: hidden;
  }
  .textContainer {
    justify-self: end;
    align-self: stretch;
    color: var(--color-primary);

    border: 1px solid var(--color-primary);
    padding: 1rem;

    p {
      font-size: 1rem;
      overflow: hidden;
    }
    @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
      padding: 0.5rem;
      font-size: 0.7rem;
      line-height: 0.8em;
    }
  }
`;
