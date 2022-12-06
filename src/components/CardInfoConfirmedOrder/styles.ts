import styled from "styled-components";

const BACKGROUND = {
  yellow1: "yellow-900",
  yellow2: "yellow-600",
  purple: "purple-600",
};

interface CardInfoConfirmedOrderProps {
  background: keyof typeof BACKGROUND;
}

export const CardInfoConfirmedOrderContainer = styled.div<CardInfoConfirmedOrderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme[BACKGROUND[props.background]]};
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    border-radius: 50%;
  }

  .card_info__confirmed_order__content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    p {
      color: ${(props) => props.theme["gray-700"]};
      font-weight: 400;
    }

    strong {
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;
