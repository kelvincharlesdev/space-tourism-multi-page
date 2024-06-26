import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import * as S from './styles';

export const Home = () => {
  return (
    <S.Content>
      <S.HomeWrapper>
        <Header />

        <Button text="EXPLORE" />
        <div style={{ display: 'flex', gap: ' 40px' }}>
          <Button variation="secondary" />
          <Button variation="secondary" />
          <Button variation="secondary" />
          <Button variation="secondary" />
        </div>

        <div style={{ display: 'flex', gap: ' 40px' }}>
          <Button variation="tertiary" text="1" />
          <Button variation="tertiary" text="2" />
          <Button variation="tertiary" text="3" />
        </div>
      </S.HomeWrapper>
    </S.Content>
  );
};
