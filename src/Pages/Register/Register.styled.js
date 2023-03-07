import styled from 'styled-components';

export const RegisterButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
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
`;
