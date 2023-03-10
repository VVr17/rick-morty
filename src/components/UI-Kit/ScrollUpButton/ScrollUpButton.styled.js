import styled from "styled-components";

export const ScrollButtonStyled = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-family: inherit;
  font-size: 0;
  font-weight: inherit;
  color: ${({ theme }) => theme.colors.mainText};
  cursor: pointer;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.accent};
  opacity: 0.9;
  transition: opacity ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    opacity: 1;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
