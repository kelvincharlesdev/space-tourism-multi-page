import * as S from './MainLayout.styles';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <S.MainLayoutWrapper data-testid="main-layout">
      <S.LayoutContent>
        <Header />
      </S.LayoutContent>
      <Outlet />
    </S.MainLayoutWrapper>
  );
};
