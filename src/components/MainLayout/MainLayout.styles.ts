import styled from 'styled-components';
import * as I from './MainLayout.interface';

export const MainLayoutWrapper = styled.div<I.MainLayoutWrapperProps>`
  min-height: 100vh;
  width: 100%;
  background-image: ${({ imageMobile, imageTablet }) =>
    imageMobile ? `url(${imageMobile})` : `url(${imageTablet})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 668px) {
    background-image: ${({ imageTablet, image }) =>
      imageTablet ? `url(${imageTablet})` : `url(${image})`};
  }

  @media (min-width: 1024px) {
    background-image: url(${({ image }) => image});
  }
`;

export const LayoutContent = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
`;
