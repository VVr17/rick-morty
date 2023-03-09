import styled from "styled-components";
import { theme } from "constants/theme";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${theme.mq.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px 20px;
  }
`;

export const ListItemStyled = styled.li`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 60px) / 4);
  }
`;
