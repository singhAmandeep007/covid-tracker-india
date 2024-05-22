import styled from "styled-components";

export const FaqContainer = styled.div`
  color: #fff;
  background: #000;
  padding: 8rem 3rem;
  min-height: calc(100vh - 80px);
`;
export const FaqWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  max-width: 110rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  //
  -webkit-perspective: 280rem;
  -moz-perspective: 280rem;
  perspective: 280rem;
  /* margin: 20px;
   margin-top: 50px; */
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    flex-direction: column;
  }
`;

export const FaqCard = styled.div`
  /* flex-grow: 1; */
  max-width: 50%;
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    max-width: 100%;
  }
  cursor: pointer;
  position: relative;
  /* max-width: 100%; */
  padding: 1rem;
  border-radius: 1px;
  /* z-index: 2; */
  background: var(--color-secondary);
  color: white;
  box-shadow: -20px 20px 0px 0 var(--color-primary);

  transform: rotateY(45deg);

  h2 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 600;

    color: var(--color-primary);
  }
`;
export const ImgWrap = styled.div`
  padding: 1.5rem;
  max-width: 100%;
  height: 100%;
  @media screen and (max-width: ${(props) => props.theme.bpMedium}) {
    margin-top: 3rem;
  }
`;

export const Img = styled.img`
  margin: 1rem;
  max-width: 30rem;
  max-height: 30rem;
  width: 100%;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  margin: 1.5rem auto;
  padding: 1rem 1.3rem;
  background-color: var(--color-primary-light);
  border-radius: 1px;
`;
export const QuestionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 600;
    font-size: 1.9rem;
    text-align: left;
    cursor: pointer;
    margin: 0;
    color: var(--color-secondary-light);
  }

  .icons {
    color: var(--color-secondary-light);
    cursor: pointer;
  }
`;
export const AnswerContent = styled.div`
  p {
    font-size: 1.5rem;
    text-align: left;
    padding: 0rem;
    margin-top: 0.3rem;
    transition: ease 0.4s;
    color: var(--color-secondary-light);
  }
`;
