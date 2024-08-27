import { MainLayout } from '@/components/MainLayout';
import * as S from './Technology.styles';
import { useState } from 'react';
import { technologyData } from '@/data/technology';
import { Button } from '@/components/Button';

export const Technology = () => {
  const [showActive, setShowActive] = useState<number>(1);
  return (
    <MainLayout
      bgImage="src/assets/technology/background-technology-desktop.jpg"
      bgImageTablet="src/assets/technology/background-technology-tablet.jpg"
      bgImageMobile="src/assets/technology/background-technology-mobile.jpg"
    >
      <S.WrapperTechnology>
        <S.Title>
          <span>03</span> SPACE LAUNCH 101
        </S.Title>

        <S.ContentInfoTechnology>
          {technologyData
            .filter(technology => technology.id === showActive)
            .map(technology => (
              <S.ContentImage>
                <img src={technology.image} alt={technology.name} />
              </S.ContentImage>
            ))}

          <S.TechnologyContainer>
            <S.ContentPaginated>
              {technologyData.map(technology => (
                <Button
                  key={technology.id}
                  text={technology.id}
                  isActive={showActive === technology.id}
                  onClick={() => setShowActive(technology.id)}
                  variation="tertiary"
                />
              ))}
            </S.ContentPaginated>

            {technologyData
              .filter(technology => technology.id === showActive)
              .map(technology => (
                <S.InfoContainer key={technology.id}>
                  <h3>{technology.role}</h3>
                  <h2>{technology.name}</h2>
                  <p>{technology.description}</p>
                </S.InfoContainer>
              ))}
          </S.TechnologyContainer>
        </S.ContentInfoTechnology>
      </S.WrapperTechnology>
    </MainLayout>
  );
};
