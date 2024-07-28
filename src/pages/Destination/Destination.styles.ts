import styled from 'styled-components';

export const WrapperDestination = styled.div`
  min-height: calc(100vh - 136px);
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    min-height: calc(100vh - 175px);
  }

  @media (min-width: 1280px) {
    padding: 0 100px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.neutral.lightest};

  span {
    padding-right: 1.5rem;
    color: #54575e;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.medium};
    line-height: ${({ theme }) => theme.fonts.size.lg};
    align-items: flex-start;
    width: 100%;
  }
  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fonts.size.large};
    line-height: 2.1rem;
  }
`;

export const NavigationDestination = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.125rem;
  max-width: 514px;
  padding: 0 1.5625rem;

  @media (min-width: 768px) {
    padding: 0 2.1875rem;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    max-width: 100%;
    height: 100%;
    gap: 1.5625rem;
  }
`;

export const ContentImage = styled.div`
  width: 150px;
  height: 150px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 1280px) {
    width: 480px;
    height: 480px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemPaginated = styled.button<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.family.tertiary};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: 1.05rem;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral.lightest : theme.colors.text.primary};
  padding-bottom: 0.9375rem;

  border-bottom: 0.1875rem solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.neutral.lightest : 'transparent'};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.neutral.light};
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }
`;

export const ContentDestination = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    width: 50%;
    max-width: 445px;
    align-items: flex-start;
    padding: 0 2.1875rem;
  }
`;

export const MenuDestination = styled.ul`
  display: flex;
  gap: 2rem;
  margin-top: 3.625rem;

  @media (min-width: 768px) {
    margin-top: 4.625rem;
  }
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const ItensDestination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1.5rem;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral.lightest};

  @media (min-width: 768px) {
    margin-top: 2.3125rem;
  }
  @media (min-width: 1280px) {
    align-items: flex-start;
    text-align: left;
    gap: 2.5rem;
  }

  hr {
    width: 100%;
  }

  h2 {
    font-size: 3.25rem;
    line-height: 64.18px;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.giant};
      line-height: 5.73rem;
    }
    @media (min-width: 1280px) {
      font-size: ${({ theme }) => theme.fonts.size.xgiant};
      line-height: 6.8762rem;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: 0.9375rem;
    line-height: 1.6875rem;
    color: ${({ theme }) => theme.colors.text.primary};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.sm};
      line-height: 1.8rem;
    }
    @media (min-width: 1280px) {
      font-size: ${({ theme }) => theme.fonts.size.md};
      line-height: 2.025rem;
    }
  }
`;

export const InfoDestination = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoDistance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
    text-align: left;
    justify-content: flex-start;
  }
`;

export const InfoDistanceTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 1280px) {
    width: 50%;
  }

  h3 {
    ${({ theme }) => theme.fonts.family.tertiary}
    font-size: ${({ theme }) => theme.fonts.size.xs};
    line-height: 1.05rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  strong {
    font-size: ${({ theme }) => theme.fonts.size.large};
    line-height: 2.0056rem;
  }
`;
