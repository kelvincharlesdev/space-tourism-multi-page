import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  background-image: url('src/assets/destination/background-destination-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 668px) {
    background-image: url('src/assets/destination/background-destination-tablet.jpg');
  }

  @media (min-width: 1024px) {
    background-image: url('src/assets/destination/background-destination-desktop.jpg');
  }

  h1 {
    width: 100%;
    min-height: 100vh;
    color: #fff;
    font-size: 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
