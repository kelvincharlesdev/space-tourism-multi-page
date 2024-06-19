import * as S from './Header.styles';
// import * as I from './Header.interface';

import Modal from 'react-modal';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { menu } from '../../data/menu';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: 0,
    left: 'auto',
    right: 0,
    bottom: 0,
    height: '100%',
    minWidth: '254px',
    marginRight: 0,
    transform: 'none',
    border: 'none',
    overflowY: 'auto' as const,
    backgroundColor: '#0B0D1726',
    backdropFilter: 'blur(50px)',
    padding: 0
  },
  overlay: {
    backgroundColor: 'transparent'
  }
};

export const Header = () => {
  const [modalIsOpem, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.HeaderContent>
          <Modal isOpen={modalIsOpem} style={customStyles}>
            <S.ModalContent>
              <S.ModalContentLogo>
                <RiCloseLine size={50} color="#D0D6F9" onClick={closeModal} />
              </S.ModalContentLogo>

              <S.ModalNavigate>
                {menu.map(item => (
                  <S.Link key={item.id} href={item.link}>
                    <span>{item.number}</span>
                    {item.label}
                  </S.Link>
                ))}
              </S.ModalNavigate>
            </S.ModalContent>
          </Modal>

          <S.HeaderLogo>
            <img src="src/assets/shared/logo.svg" alt="Imagem da Logo" />
          </S.HeaderLogo>
          <GiHamburgerMenu size={30} color="#D0D6F9" onClick={openModal} />
        </S.HeaderContent>
      </div>
    </S.HeaderContainer>
  );
};
