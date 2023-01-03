import styled from "styled-components";

export const CompleteOrder = styled.div`
  padding: 2.2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-200"]};

  .form {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .inputContainer {
      width: 100%;
      display: flex;
      gap: 0.8rem;
    }
  }
`;

export const TitleCofirmPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  .icon {
    margin-bottom: 0.5rem;
  }

  .chamada_titulo_complete_order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;

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
  border: 0;
  outline: 0;

  &:focus {
    border: 2px solid ${(props) => props.theme["yellow-600"]};
  }
`;
