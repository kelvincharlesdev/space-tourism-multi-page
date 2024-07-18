import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('src/assets/home/background-home-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 668px) {
    background-image: url('src/assets/home/background-home-tablet.jpg');
  }

  @media (min-width: 1024px) {
    justify-content: end;
    background-image: url('src/assets/home/background-home-desktop.jpg');
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const HomeDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 3rem 0 7.4375rem;

  @media (min-width: 668px) {
    max-width: 500px;
    margin: 8rem 0 4.125rem;
  }
  @media (min-width: 1024px) {
    text-align: left;
    min-width: 500px;
    margin: 3rem 0 6.5rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.sm};
    letter-spacing: 0.15rem;
    font-family: ${({ theme }) => theme.fonts.family.tertiary};

    @media (min-width: 668px) {
      font-size: ${({ theme }) => theme.fonts.size.large};
      letter-spacing: 0.25rem;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.giant};
    letter-spacing: 0.15rem;
    color: ${({ theme }) => theme.colors.neutral.lightest};

    @media (min-width: 668px) {
      font-size: ${({ theme }) => theme.fonts.size.huge};
    }
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.6875rem;
    font-family: ${({ theme }) => theme.fonts.family.secondary};

    @media (min-width: 668px) {
      font-size: ${({ theme }) => theme.fonts.size.sm};
      line-height: 1.8rem;
    }

    @media (min-width: 1024px) {
      font-size: ${({ theme }) => theme.fonts.size.md};
      line-height: 2.025rem;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-top: -6.25rem;
  }
`;
