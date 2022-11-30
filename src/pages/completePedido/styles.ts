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

export const CompleteOrderContainer = styled.div`
  max-width: 640px;
  width: 100%;
  color: ${(props) => props.theme["gray-900"]};

  h3 {
    margin-bottom: 1rem;
  }
`;

export const CompleteOrder = styled.div`
  padding:2.2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-200"]};

  .titulo_complete_order {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    .chamada_titulo_complete_order {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p:first-child {
        color: ${(props) => props.theme["gray-800"]};
        font-weight: 400;
        font-size: 1.09rem;
        line-height: 130%;
        margin-bottom: 2px;
      }

      p:nth-child(2) {
        color: ${(props) => props.theme["gray-700"]};
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 130%;
      }
    }
  }
  form {
    margin-top:1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    .inputContainer {
      width: 100%;
      display: flex;
      gap: 0.8rem;
    }
  }
`;

interface InputFormProps {
  maxWidth?: number;
}

export const InputForm = styled.input<InputFormProps>`
  width: ${(props) => (props.maxWidth ? props.maxWidth + "px" : "100%")};
  height: 42px;
  border-radius: 4px;
  padding: 0.8rem;
  background-color: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-800"]};
  border:0;
`;

export const OrderCart = styled.div`
  max-width: 448px;
  width: 100%;
  background-color: ${(props) => props.theme["gray-200"]};
  color: ${(props) => props.theme["gray-900"]};
`;
