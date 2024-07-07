import * as S from './Links.styles';
import * as I from './Links.interface';

export const Links = ({ menu }: I.LinksProps) => {
  return (
    <S.LinkMenu to={menu.link}>
      <span>{menu.number}</span>
      {menu.label}
    </S.LinkMenu>
  );
};
