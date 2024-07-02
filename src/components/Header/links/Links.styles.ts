import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.neutral.lightest};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.tertiary};
  letter-spacing: 0.125rem;

  span {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    padding-right: 0.75rem;
  }

  &:hover {
    border-right: 0.1875rem solid ${({ theme }) => theme.colors.hover.light};
  }

  &:focus {
    border-right: 0.1875rem solid
      ${({ theme }) => theme.colors.neutral.lightest};
  }

  @media (min-width: 768px) {
    padding-bottom: 2.4063rem;

    &:hover {
      border-right: none;
      border-bottom: 0.1875rem solid ${({ theme }) => theme.colors.hover.light};
    }

    &:focus {
      border-right: none;
      border-bottom: 0.1875rem solid
        ${({ theme }) => theme.colors.neutral.lightest};
    }
  }
`;
