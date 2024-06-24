import * as S from './SideBar.styles';
import * as I from './SideBar.interface';

import { RiCloseLine } from 'react-icons/ri';
import { menu } from '../../../data/menu';
import Modal from 'react-modal';
import { Links } from '../links';

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

export const SideBar = ({ closeModal, modalIsOpem }: I.SideBarProps) => {
  return (
    <Modal
      isOpen={modalIsOpem}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <S.ModalContent>
        <S.ModalContentLogo>
          <RiCloseLine size={50} color="#D0D6F9" onClick={closeModal} />
        </S.ModalContentLogo>

        <S.ModalNavigate>
          {menu.map(menu => (
            <Links menu={menu} />
          ))}
        </S.ModalNavigate>
      </S.ModalContent>
    </Modal>
  );
};
