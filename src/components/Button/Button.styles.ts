import styled, { css } from 'styled-components';

import * as I from './Button.interface';

const variations = {
  primary: css<I.ButtonProps>`
    width: 144px;
    height: 144px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: ease-in-out 0.3s;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      box-shadow: 0 0 0 5.5rem ${({ theme }) => theme.colors.hover};
    }

    @media (min-width: 768px) {
      width: 272px;
      height: 272px;
    }
  `,
  secondary: css<I.ButtonProps>`
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.gray100};
    transition: ease-in-out 0.2s;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media (min-width: 768px) {
      width: 15px;
      height: 15px;
    }
  `,
  tertiary: css<I.ButtonProps>`
    width: 56px;
    height: 56px;
    background-color: transparent;
    border: 0.125rem solid ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      border-color: ${({ theme }) => theme.colors.white};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  `
};

export const ButtonContainer = styled.button<I.ButtonProps>`
  ${({ variation }) => variation && variations[variation]}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fonts.size.md};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.xl};
    }
  }
`;
