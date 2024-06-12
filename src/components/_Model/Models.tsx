import * as S from './Models.styles';
import * as I from './Models.interface';

export const Model = ({ children }: I.ModelProps) => {
  return <S.Container>{children}</S.Container>;
};
