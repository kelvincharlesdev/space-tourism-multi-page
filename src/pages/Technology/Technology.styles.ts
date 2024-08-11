import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperTechnology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;

  @media (min-width: 768px) {
    padding-top: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.neutral.lightest};

  span {
    padding-right: 1.5rem;
    color: #54575e;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.medium};
    line-height: ${({ theme }) => theme.fonts.size.lg};
    align-items: flex-start;
    width: 100%;
  }
  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fonts.size.large};
    line-height: 2.1rem;
    max-width: 1110px;
  }
`;

export const ContentInfoTechnology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5.5rem;

  @media (min-width: 1280px) {
    flex-direction: row-reverse;
    height: 734px;
    gap: 2rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;

  @media (min-width: 1280px) {
    width: 539px;
    min-height: 631px;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.size.md};
    line-height: 1.2894rem;
    color: #949599;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.lg};
      line-height: 1.7188rem;
      margin-bottom: 1rem;
    }
    @media (min-width: 1280px) {
      font-size: ${({ theme }) => theme.fonts.size.xl};
      line-height: 2.2938rem;
      justify-content: center;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    line-height: 1.7188rem;
    color: ${({ theme }) => theme.colors.neutral.lightest};
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.xxl};
      line-height: 2.865rem;
      margin-bottom: 1.5rem;
    }
    @media (min-width: 1280px) {
      font-size: ${({ theme }) => theme.fonts.size.xxxl};
      line-height: 4.0113rem;
    }
  }

  p {
    //font-family: Barlow;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: 15px;
    line-height: 1.6875rem;
    color: #d0d6f9;
    margin-bottom: 2.8125rem;
    padding: 0 1.25rem;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.sm};
      line-height: 1.8rem;
      max-width: 512px;
    }
    @media (min-width: 1280px) {
      font-size: ${({ theme }) => theme.fonts.size.md};
      line-height: 2.025rem;
      max-width: 485px;
      padding: 0;
    }
  }
`;
export const ContentImage = styled.div`
  width: 100vw;
  height: 293.74px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, #0b0d17);
    z-index: 5;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 560px;
  }
  @media (min-width: 1280px) {
    width: 608px;
    height: 608px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentPaginated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding-top: 2rem;

  @media (min-width: 1280px) {
    gap: 2.5rem;
    justify-content: flex-start;
    margin-bottom: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 80px;
  }
`;

export const TechnologyContainer = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 4rem;
  }
`;
