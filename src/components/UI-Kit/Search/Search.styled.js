import styled from "styled-components";
import { theme } from "constants/theme";

export const FormStyled = styled.form`
  width: 100%;
  margin-bottom: 32px;
  position: relative;

  ${theme.mq.desktop} {
    margin-bottom: 61px;
  }

  input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
    border-radius: 8px;
    font-size: inherit;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-family: inherit;
    line-height: 1.5;
    color: inherit;

    ::placeholder {
      ${({ theme }) => theme.colors.placeholder};
    }
  }
`;

export const ButtonSubmit = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.colors.placeholder};
  transition: color ${({ theme }) => theme.transitionTiming},
    opacity ${({ theme }) => theme.transitionTiming};
  outline: none;

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  :disabled {
    opacity: 0.3;
  }

  svg {
    width: 17px;
    height: 17px;
  }
`;
