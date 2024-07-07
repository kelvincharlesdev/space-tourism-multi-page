import * as S from './Home.styles';

import { Button } from '@/components/Button';
import { MainLayout } from '@/components/MainLayout';

export const Home = () => {
  return (
    <MainLayout
      bgImage="src/assets/home/background-home-desktop.jpg"
      bgImageTablet="src/assets/home/background-home-tablet.jpg"
      bgImageMobile="src/assets/home/background-home-mobile.jpg"
    >
      <S.Main>
        <S.Content>
          <S.HomeDescription>
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </S.HomeDescription>
          <S.ContentButton>
            <Button text="EXPLORE" />
          </S.ContentButton>
        </S.Content>
      </S.Main>
    </MainLayout>
  );
};
