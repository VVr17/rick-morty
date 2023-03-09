import styled from "styled-components";
import { theme } from "constants/theme";

export const UserData = styled.p`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 90px;
  overflow-x: hidden;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-weight: ${({ theme }) => theme.fontSizes.m};

  ${theme.mq.desktop} {
    font-size: 16px;
    max-width: 160px;
  }
`;
