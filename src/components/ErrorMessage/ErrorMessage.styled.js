import styled from "styled-components";

export const MessageStyled = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.mainText};
`;
