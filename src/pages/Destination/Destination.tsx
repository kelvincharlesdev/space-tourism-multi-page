import { MainLayout } from '@/components/MainLayout';
import * as S from './Destination.styles';
import { destinations } from '@/data/destinations';
import { useState } from 'react';

export const Destination = () => {
  const [showActive, setShowActive] = useState<number>(1);

  return (
    <MainLayout
      bgImage="src/assets/destination/background-destination-desktop.jpg"
      bgImageTablet="src/assets/destination/background-destination-tablet.jpg"
      bgImageMobile="src/assets/destination/background-destination-mobile.jpg"
    >
      <S.WrapperDestination>
        <S.Title>
          <span>01</span>PICK YOUR DESTINATION
        </S.Title>

        <S.NavigationDestination>
          {destinations
            .filter(destination => destination.id === showActive)
            .map(destination => (
              <S.ContentImage key={destination.id}>
                <img src={destination.img} alt={destination.title} />
              </S.ContentImage>
            ))}

          <S.ContentDestination>
            <S.MenuDestination>
              {destinations.map(destination => (
                <li key={destination.id}>
                  <S.ItemPaginated
                    onClick={() => setShowActive(destination.id)}
                    isActive={destination.id === showActive}
                  >
                    {destination.title}
                  </S.ItemPaginated>
                </li>
              ))}
            </S.MenuDestination>

            <S.ItensDestination>
              {destinations
                .filter(destination => destination.id === showActive)
                .map(destination => (
                  <>
                    <S.InfoDestination>
                      <h2>{destination.title}</h2>
                      <p>{destination.description}</p>
                    </S.InfoDestination>
                    <hr />
                    <S.InfoDistance>
                      <S.InfoDistanceTime>
                        <h3>AVG. DISTANCE</h3>
                        <strong>{destination.distanceKm}</strong>
                      </S.InfoDistanceTime>

                      <S.InfoDistanceTime>
                        <h3>EST. TRAVEL TIME</h3>
                        <strong>{destination.travelTime}</strong>
                      </S.InfoDistanceTime>
                    </S.InfoDistance>
                  </>
                ))}
            </S.ItensDestination>
          </S.ContentDestination>
        </S.NavigationDestination>
      </S.WrapperDestination>
    </MainLayout>
  );
};
