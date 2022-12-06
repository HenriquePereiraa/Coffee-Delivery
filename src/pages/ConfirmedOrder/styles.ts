import styled from "styled-components";

export const ConfirmedOrderContainer = styled.section`
  max-width: 1150px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 2%;

  display: flex;
  justify-content: center;
  align-items:flex-end;
  justify-content:center;
  gap: 5rem;

`;

export const InfoConfirmedOrder = styled.div`
  max-width: 526px;
  width: 100%;

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: ${(props) => props.theme["yellow-900"]};
  }

  span {
    font-size: 1.25rem;
    line-height: 1.63rem;
    color: ${(props) => props.theme["gray-800"]};
  }

  .confirmed_order__delivery_information {
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    padding: 2.2rem;
    margin-top: 1.5rem;

    border: 1px solid #8047f8;
    border-radius: 6px 36px;
  }
`;
