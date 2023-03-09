import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.mainText};
  cursor: pointer;
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
