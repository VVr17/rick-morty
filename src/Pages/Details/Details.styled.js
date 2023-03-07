import { theme } from 'constants/theme';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.detailsMainText};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};

  ${theme.mq.desktop} {
    max-width: 413px;
  }
`;

export const ImageStyled = styled.img`
  margin-bottom: 34px;
  width: 150px;
  height: 148px;
  border-radius: 150px;
  border: 5px solid ${({ theme }) => theme.colors.imageBorder};

  ${theme.mq.desktop} {
    width: 300px;
    height: 300px;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 34px;
  line-height: 1.19;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  ${theme.mq.desktop} {
    margin-bottom: 48px;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: 1.17;
  }
`;

export const InformationStyled = styled.p`
  align-self: flex-start;
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.information};

  ${theme.mq.desktop} {
    margin-bottom: 48px;
    align-self: center;
  }
`;
