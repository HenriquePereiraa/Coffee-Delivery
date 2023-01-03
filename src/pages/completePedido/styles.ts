import styled from "styled-components";

export const ConfirmOrderContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  form {
    display: flex;
    gap: 1rem;
  }
`;

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;CompleteOrder
  max-width: 640px;
  width: 100%;
  color: ${(props) => props.theme["gray-900"]};
`;
