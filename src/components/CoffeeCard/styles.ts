import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  position: relative;
  max-width: 256px;
  width: 100%;
  height: 310px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 36px;

  > img {
    width: 120px;
    height: 120px;
    position: relative;
    top: -40px;
  }

  .coffee_title {
    font-weight: bold;
    font-size: 1.2rem;
    font-family: "Baloo 2";
    line-height: 130%;
    margin-top:15px;

    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const CoffeeCardLabelType = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.6rem ;

  > span {
    margin-top: -15px;
    padding: 0.3rem 0.5rem;
    border-radius: 100px;
    font-weight: bold;
    font-size: 0.85rem;
    line-height: 130%;
    text-transform: uppercase;
    background-color: ${(props) => props.theme["yellow-300"]};
    color: ${(props) => props.theme["yellow-900"]};
  }
`;

export const DescriptionCoffee = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 130%;
  text-align: center;
  padding: 0 2%;
  margin-top: 8px;
  color: ${(props) => props.theme["gray-600"]};
`;

export const CardInfoBuyCoffee = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 8px;
  justify-content: spacing-between;
  align-items: center;

  .coffee_price {
    color: ${(props) => props.theme["gray-700"]};

    span {
      font-size: 1rem;
      padding-right: 2px;
    }

    strong {
      font-size: 1.4rem;
    }
  }

  .coffee_quantidade {
    display: flex;
    justify-content: spacing-between;
    align-items: center;
    gap: 1.5rem;
    padding: 7px;
    border-radius: 10px;
    background-color: ${(props) => props.theme["gray-400"]};

    span {
      color: ${(props) => props.theme["purple-900"]};
      font-size: 1.5rem;
      cursor: pointer;
    }
    span:nth-child(2) {
      color: ${(props) => props.theme["gray-900"]};
      font-size: 1.2rem;
      cursor: auto;
    }
  }

  .coffee_cart {
    padding: 7px;
    border-radius: 8px;
    background-color: ${(props) => props.theme["purple-900"]};
    cursor: pointer;
  }
`;
