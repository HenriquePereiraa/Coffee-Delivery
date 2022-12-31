import styled from "styled-components";

export const ModePaymentContainer = styled.div`
  padding: 2.2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-200"]};
`;

export const TitleConfirmPayment = styled.div`
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

export const ButtonsModePayment = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ButtonPaymentMode = styled.button`
  display:flex ;
  align-items:center;
  gap:.4rem;

  width:179px ;
  height: 51px;
  padding:1rem;
  background-color:${(props) => props.theme["gray-400"]};

  font-size:.77rem;
  color:${(props) => props.theme["gray-700"]};
  Line height:1.2rem;
  font-weight:400;

  border:0;
  border-radius:5px;
  cursor:pointer;
  transition:color .9s ease-in;

  &:hover{
    background-color:${(props) => props.theme["gray-500"]};
  }

  &:focus{
    background-color:${(props) => props.theme["purple-300"]};
  }
`;
