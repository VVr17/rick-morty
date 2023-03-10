import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { topScroll } from "helpers/topScroll";
import { ScrollButtonStyled } from "./ScrollUpButton.styled";

const ScrollUpButton = () => {
  return (
    <ScrollButtonStyled onClick={topScroll} aria-label="scroll-up">
      <AiOutlineArrowUp />
    </ScrollButtonStyled>
  );
};

export default ScrollUpButton;
