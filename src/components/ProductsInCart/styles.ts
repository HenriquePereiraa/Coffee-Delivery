import styled from "styled-components";

export const ProductsInCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap:.8rem;

  img {
    width:64px;
    height:64px;
  }

  .price_coffee_in_cart {
    padding-left:1rem;

    font-size:1rem;
    font-weight:700;
    color:${(props) => props.theme["gray-700"]}
  }

  .products_cart_info {
    display: flex;
    flex-direction:column;
    gap:.5rem;

    p {
      font-size:1rem;
      font-weight:400;
      Line height:20.8px;
      color:${(props) => props.theme["gray-800"]}
    }

    .products_cart_info_functions {
      display: flex;
      align-items: center;
      gap:.5rem;
    }
  }
`;

export const DividingLine = styled.div`
  width: 100%;
  height: 0.5px;
  margin: 25px 0;
  background-color: ${(props) => props.theme["gray-400"]};
`;