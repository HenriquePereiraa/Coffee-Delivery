import styled from "styled-components";

export const ConfirmOrderContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

export const CompleteOrder = styled.div`
  max-width: 640px;
  width: 100%;
  background-color: ${(props) => props.theme["gray-200"]};
  color: ${(props) => props.theme["gray-900"]};
`;

export const OrderCart = styled.div`
  max-width: 448px;
  width: 100%;
  background-color: ${(props) => props.theme["gray-200"]};
  color: ${(props) => props.theme["gray-900"]};
`;
