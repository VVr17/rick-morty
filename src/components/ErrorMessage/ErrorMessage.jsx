import React from "react";
import { MessageStyled } from "./ErrorMessage.styled";

const ErrorMessage = () => {
  return (
    <>
      <MessageStyled> Oops, there is nothing found.</MessageStyled>
      <MessageStyled> Please, try again or change your request</MessageStyled>
    </>
  );
};

export default ErrorMessage;
