import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  max-height: 88px;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 96px;
  }
  @media (min-width: 1080px) {
    height: 136px;
    margin-top: 2.5rem;
  }
`;

export const HeaderNavigate = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 100%;
  width: 100%;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 0 0 0 2.5rem;
  }
  @media (min-width: 1080px) {
    padding: 0 0 0 4rem;
  }
`;

export const HeaderLogo = styled.figure`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 1120px) {
    .horizontalRule {
      border: 0.0625rem solid ${({ theme }) => theme.colors.neutral.regular};
      width: 330px;
      position: absolute;
      left: 7rem;
    }
  }

  @media (min-width: 1180px) {
    .horizontalRule {
      width: 400px;
    }
  }
  @media (min-width: 1220px) {
    .horizontalRule {
      width: 430px;
    }
  }
  @media (min-width: 1295px) {
    .horizontalRule {
      width: 500px;
    }
  }

  @media (min-width: 1400px) {
    .horizontalRule {
      width: 550px;
    }
  }
`;

export const HeaderNavigateLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  width: 640px;
  padding: 0 2.5rem 0 7.3125rem;
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  gap: 3rem;
  position: relative;

  @media (min-width: 1080px) {
    width: 736px;
  }
`;
