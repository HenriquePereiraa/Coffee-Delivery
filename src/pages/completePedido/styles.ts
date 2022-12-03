import styled from "styled-components";

export const ConfirmOrderContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
`;

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 640px;
  width: 100%;
  color: ${(props) => props.theme["gray-900"]};
`;

export const TitleCofirmPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  .icon {
    margin-bottom: .5rem;
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

export const CompleteOrder = styled.div`
  padding: 2.2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-200"]};

  form {
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
  outline:0;

  &:focus {
    border: 2px solid ${(props) => props.theme["yellow-600"]};
  }
`;

export const ModePayment = styled.div`
  padding: 2.2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-200"]};
`;

export const ButtonsModePayment = styled.div`
  margin-top:2rem;
  display:flex ;
  justify-content:center;
  align-items:center;
  gap:1rem;
`

export const ButtonPaymentMode = styled.button`
  display:flex ;
  align-items:center;
  gap:.4rem;

  width:179px ;
  height: 51px;
  padding:1rem;
  background-color:${props => props.theme['gray-400']};

  font-size:.77rem;
  color:${props => props.theme['gray-700']};
  Line height:1.2rem;
  font-weight:400;

  border:0;
  border-radius:5px;
  cursor:pointer;
  transition:color .9s ease-in;

  &:hover{
    background-color:${props => props.theme['gray-500']};
  }

  &:focus{
    background-color:${props => props.theme['purple-300']};
  }
`
