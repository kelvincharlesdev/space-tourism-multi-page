import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.main.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  min-height: 100vh;
`;

export const HomeWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.neutral.lightest};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.giant};
`;
