import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.main.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.neutral.lightest};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.giant};
`;
