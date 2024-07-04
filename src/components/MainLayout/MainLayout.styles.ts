import styled, { css } from 'styled-components';
import * as I from './MainLayout.interface';

export const MainLayoutWrapper = styled.div<I.MainLayoutStyleProps>`
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${({ $bgImage, $bgImageMobile, $bgImageTablet }) => css`
    background-image: ${$bgImageMobile
      ? `url(${$bgImageMobile})`
      : `url(${$bgImageTablet})`};

    @media (min-width: 668px) {
      background-image: ${$bgImageTablet
        ? `url(${$bgImageTablet})`
        : `url(${$bgImage})`};
    }

    @media (min-width: 1024px) {
      background-image: url(${$bgImage});
    }
  `}
`;

export const LayoutContent = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
`;
