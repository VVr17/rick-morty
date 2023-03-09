import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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
