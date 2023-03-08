import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: ${({ type }) => (type === "register" ? "auto" : "0")}; */

  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-weight: ${({ theme }) => theme.fontSizes.m};
  line-height: 1.17;
  transition: color ${({ theme }) => theme.transitionTiming};

  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const RegisterButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.mainText};
  cursor: pointer;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: transparent;

  transition: background-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
`;
