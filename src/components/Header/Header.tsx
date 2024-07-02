import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';

import * as S from './Header.styles';
import { SideBar } from './SideBar';
import { Links } from './links';

import { menu } from '@/data/menu';

export const Header = () => {
  const [modalIsOpem, setModalIsOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <S.HeaderContainer data-testid="header-container">
      <S.HeaderNavigate>
        <S.HeaderLogo>
          <img src="src/assets/shared/logo.svg" alt="Imagem da Logo" />
          <span className="horizontalRule"></span>
        </S.HeaderLogo>

        {isMobile ? (
          <>
            <GiHamburgerMenu size={30} color="#D0D6F9" onClick={openModal} />
            <SideBar closeModal={closeModal} modalIsOpen={modalIsOpem} />
          </>
        ) : (
          <S.HeaderNavigateLinks>
            {menu.map(menu => (
              <li key={menu.id}>
                <Links menu={menu} />
              </li>
            ))}
          </S.HeaderNavigateLinks>
        )}
      </S.HeaderNavigate>
    </S.HeaderContainer>
  );
};
