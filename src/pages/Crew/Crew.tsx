import { MainLayout } from '@/components/MainLayout';

import * as S from './Crew.styles';
import { Button } from '@/components/Button';
import { crews } from '@/data/crew';
import { useState } from 'react';

export const Crew = () => {
  const [showActive, setShowActive] = useState<number>(1);

  return (
    <MainLayout
      bgImage="src/assets/crew/background-crew-desktop.jpg"
      bgImageTablet="src/assets/crew/background-crew-tablet.jpg"
      bgImageMobile="src/assets/crew/background-crew-mobile.jpg"
    >
      <S.WrapperCrew>
        <S.Title>02 MEET YOUR CREW</S.Title>

        <S.ContentInfoCrew>
          <div>
            {crews
              .filter(crew => crew.id === showActive)
              .map(crew => (
                <S.InfoContainer key={crew.id}>
                  <h3>{crew.role}</h3>
                  <h2>{crew.name}</h2>
                  <p>{crew.description}</p>
                </S.InfoContainer>
              ))}

            <S.ContentPagineted>
              {crews.map(crew => (
                <Button
                  key={crew.id}
                  isActive={showActive === crew.id}
                  onClick={() => setShowActive(crew.id)}
                  variation="secondary"
                />
              ))}
            </S.ContentPagineted>
          </div>

          {crews
            .filter(crew => crew.id === showActive)
            .map(crew => (
              <S.ContentImage>
                <img src={crew.image} alt={crew.name} />
              </S.ContentImage>
            ))}
        </S.ContentInfoCrew>
      </S.WrapperCrew>
    </MainLayout>
  );
};
