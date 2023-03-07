import { theme } from 'constants/theme';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding-top: 23px;
  padding-bottom: 23px;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 360px;

  ${theme.mq.desktop} {
    padding-left: 210px;
    padding-right: 210px;
    max-width: 1440px;
  }
`;
