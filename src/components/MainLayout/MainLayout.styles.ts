import styled from 'styled-components';
import * as I from './MainLayout.interface';

export const MainLayoutWrapper = styled.div<I.MainLayoutStyleProps>`
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export const LayoutContent = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
