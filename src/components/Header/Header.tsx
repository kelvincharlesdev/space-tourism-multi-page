import * as S from './Header.styles';
import * as I from './Header.interface';

export const Header = ({ children }: I.HeaderProps) => {
  return <S.HeaderContainer>{children}</S.HeaderContainer>;
};
