import Modal from 'react-modal';
import { RiCloseLine } from 'react-icons/ri';

import * as S from './SideBar.styles';
import * as I from './SideBar.interface';

import { menu } from '@/data/menu';
import { Links } from '../links';
import { customStylesModalMenu } from '@/const';

Modal.setAppElement('#root');

export const SideBar = ({
  closeModal,
  modalIsOpen: modalIsOpen
}: I.SideBarProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStylesModalMenu}
      onRequestClose={closeModal}
    >
      <S.ModalContent data-testid="sideBar">
        <S.ModalContentLogo>
          <RiCloseLine
            size={50}
            color="#D0D6F9"
            onClick={closeModal}
            data-testid="close"
          />
        </S.ModalContentLogo>

        <S.ModalNavigate>
          {menu.map(menu => (
            <Links key={menu.id} menu={menu} />
          ))}
        </S.ModalNavigate>
      </S.ModalContent>
    </Modal>
  );
};
