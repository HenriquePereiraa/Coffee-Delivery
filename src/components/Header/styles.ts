import styled from "styled-components";

export const ContainerHeader = styled.header`
  max-width: 1120px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

export const InfoLocalization = styled.div`
  width: 143px;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme["purple-900"]};
`;

export const CartHeader = styled.div`
position:relative ;
  background-color: ${(props) => props.theme["yellow-300"]};
  padding: 0.35rem 0.45rem;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`;

export const CoffeeAmountInCart = styled.div`
  position:absolute;
  top:-8px;
  right:-8px;

  display:flex ;
  justify-content:center;
  align-items:center;

  width:20px;
  height:20px;
  border-radius:50%;
  background:${props => props.theme['yellow-900']} ;
  color:${props => props.theme['white']};

  font-size:0.8rem;
  Line height:15.6px;
  font-weight:700;
`
