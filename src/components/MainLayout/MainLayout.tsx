import * as S from './MainLayout.styles';
import * as I from './MainLayout.interface';
import { Header } from '../Header';

export const MainLayout = ({
  children,
  bgImage,
  bgImageMobile,
  bgImageTablet
}: I.MainLayoutProps) => {
  return (
    <S.MainLayoutWrapper
      $bgImage={bgImage}
      $bgImageTablet={bgImageTablet}
      $bgImageMobile={bgImageMobile}
      data-testid="main-layout"
    >
      <S.LayoutContent>
        <Header />
        {children}
      </S.LayoutContent>
    </S.MainLayoutWrapper>
  );
};
