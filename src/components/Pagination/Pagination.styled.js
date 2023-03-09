import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { TbArrowLeftTail, TbArrowRightTail } from "react-icons/tb";
import { theme } from "constants/theme";

export const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  list-style-type: none;
  padding: 2px;
  font-size: 10px;

  ${theme.mq.desktop} {
    gap: 12px;
    padding: 4px;
    font-size: 16px;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 23px;
    min-width: 23px;
    padding: 4px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    cursor: pointer;
    border-radius: 40px;
    transition: color ${({ theme }) => theme.transitionTiming},
      background-color ${({ theme }) => theme.transitionTiming};

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.mainText};
    }

    ${theme.mq.desktop} {
      min-height: 30px;
      min-width: 30px;
    }
  }

  li.previous a,
  li.next a {
    border-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    min-height: 23px;
    border-radius: 40px;
    transition: color ${({ theme }) => theme.transitionTiming},
      background-color ${({ theme }) => theme.transitionTiming};

    ${theme.mq.desktop} {
      min-height: 30px;
    }

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.mainText};
    }
  }

  li.active a {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: transparent;
    color: white;
  }

  li.disabled a {
    cursor: default;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.cardBorder};
    border-color: ${({ theme }) => theme.colors.cardBorder};

    :hover,
    :focus {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.cardBorder};
      border-color: ${({ theme }) => theme.colors.cardBorder};
    }
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const Prev = styled(TbArrowLeftTail)``;
export const Next = styled(TbArrowRightTail)``;
