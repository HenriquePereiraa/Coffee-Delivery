import styled from "styled-components";

export const ChooseAmountCoffeeContainer = styled.div`
  width: 76px;
  display: flex;
  justify-content: spacing-between;
  align-items: center;
  gap: 1.2rem;
  padding: 2px;
  border-radius: 10px;
  background-color: ${(props) => props.theme["gray-400"]};

  span {
    color: ${(props) => props.theme["purple-900"]};
    font-size: 1.5rem;
    cursor: pointer;
    transition:color .3s ;

    &:hover {
      color: ${(props) => props.theme["purple-600"]};
    }
  }
  span:nth-child(2) {
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1.2rem;
    cursor: auto;
  }
`;
