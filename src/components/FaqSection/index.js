import React, { useState } from "react";
import {
  FaqCard,
  FaqContainer,
  FaqWrapper,
  ImgWrap,
  Img,
  QuestionContainer,
  QuestionContent,
  AnswerContent,
} from "./FaqElements";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import questions from "./FaqData";
import svg from "./../../images/svg-4.svg";
import LazyLoad from "./../../hooks/LazyLoad";

const Question = ({ ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <QuestionContainer onClick={() => setShow(!show)}>
      <QuestionContent>
        <h3>{props.question.title}</h3>
        {show ? <BsFillCaretDownFill className="icons" /> : <BsFillCaretRightFill className="icons" />}
      </QuestionContent>
      <AnswerContent>{show && <p>{props.question.info}</p>}</AnswerContent>
    </QuestionContainer>
  );
};

const FaqSection = () => {
  return (
    <LazyLoad id="faq">
      <FaqContainer>
        <FaqWrapper>
          <FaqCard>
            <h2>F.A.Q to clear your doubts</h2>
            {questions.map((value) => {
              return (
                <Question
                  key={value.id}
                  question={value}
                />
              );
            })}
          </FaqCard>

          <ImgWrap>
            <Img
              src={svg}
              alt="faq"
            />
          </ImgWrap>
        </FaqWrapper>
      </FaqContainer>
    </LazyLoad>
  );
};

export default FaqSection;
