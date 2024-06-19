import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 88px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderLogo = styled.figure`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ModalContent = styled.div`
  padding: 18px;

  svg {
    cursor: pointer;
  }
`;

export const ModalContentLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ModalNavigate = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 81px;
`;
export const Link = styled.a`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.family.tertiary};
  letter-spacing: 2px;

  span {
    font-weight: 700;
    padding-right: 12px;
  }

  &:hover {
    border-right: 3px solid rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-right: 3px solid #ffffff;
  }
`;
