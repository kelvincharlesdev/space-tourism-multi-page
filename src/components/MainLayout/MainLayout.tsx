import * as S from './MainLayout.styles';
import * as I from './MainLayout.interface';
import { Header } from '../Header';

export const MainLayout = ({
  children,
  image,
  imageMobile,
  imageTablet
}: I.MainLayoutProps) => {
  return (
    <S.MainLayoutWrapper
      image={image}
      imageTablet={imageMobile}
      imageMobile={imageTablet}
      data-testid="main-layout"
    >
      <S.LayoutContent>
        <Header />
        {children}
      </S.LayoutContent>
    </S.MainLayoutWrapper>
  );
};
