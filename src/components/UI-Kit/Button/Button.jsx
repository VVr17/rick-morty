import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;
