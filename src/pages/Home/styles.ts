import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 500px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.giant};
`;
