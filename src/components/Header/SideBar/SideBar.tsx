import Modal from 'react-modal';
import { RiCloseLine } from 'react-icons/ri';

import * as S from './SideBar.styles';
import * as I from './SideBar.interface';

import { menu } from '@/data/menu';
import { Links } from '../links';
import { customStylesModalMenu } from '@/const';

Modal.setAppElement('#root');

export const SideBar = ({ closeModal, modalIsOpem }: I.SideBarProps) => {
  return (
    <Modal
      isOpen={modalIsOpem}
      style={customStylesModalMenu}
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
