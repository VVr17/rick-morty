import styled from "styled-components";
import { theme } from "constants/theme";

export const ImageStyled = styled.img`
  height: 232px;
  width: 100%;
  object-fit: cover;

  ${theme.mq.desktop} {
    height: 168px;
  }
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
