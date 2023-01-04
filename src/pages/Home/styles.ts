import styled from "styled-components";
import BgHome from "../../assets/background.png";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomeBanner = styled.div`
  height: 65vh;
  margin-top: 2rem;

  background-image: url(${BgHome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeContent = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HomeContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3.2rem;
    letter-spacing: -2px;
    line-height: 60px;
    color: ${(props) => props.theme["gray-900"]};
  }

  .info-hero {
    color: ${(props) => props.theme["gray-800"]};
    line-height: 15px;
    font-weight: 400;
  }

  @media screen and (max-width: 830px) {
    h1 {
      text-align:center;
    }
    align-items: center;
  }
`;

export const HomeContentBanner = styled.img`
  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const CardsInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 2.5rem;

  margin-top: 3rem;
`;

export const HomeNossosCafe = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;

  > h2 {
    margin: 4rem 0;

    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const ListCoffees = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5rem 2rem;

  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
