import styled from 'styled-components';

export const CharacterInfoStyled = styled.ul`
  align-self: flex-start;
  width: 100%;
  text-transform: capitalize;

  li {
    padding: 9px 16px 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;

export const KeyStyled = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const ValueStyled = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.detailsSecondary};
`;
