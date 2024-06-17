import * as S from './Button.styles';
import * as I from './Button.interface';

export const Button = ({
  text,
  variation = 'primary',
  ...props
}: I.ButtonProps) => {
  return (
    <S.ButtonContainer {...props} variation={variation}>
      <span>{text}</span>
    </S.ButtonContainer>
  );
};
