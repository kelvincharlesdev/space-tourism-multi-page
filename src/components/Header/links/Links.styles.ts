import styled from 'styled-components';

export const Link = styled.a`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.family.tertiary};
  letter-spacing: 2px;

  span {
    font-weight: 700;
    padding-right: 12px;
  }

  &:hover {
    border-right: 3px solid rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-right: 3px solid #ffffff;
  }

  @media (min-width: 768px) {
    padding-bottom: 38.5px;

    &:hover {
      border-right: none;
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }

    &:focus {
      border-right: none;
      border-bottom: 3px solid #ffffff;
    }
  }
`;
