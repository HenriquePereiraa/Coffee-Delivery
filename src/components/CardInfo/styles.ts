import styled from "styled-components";

const BACKGROUND = {
  gray: "gray-700",
  yellow1: "yellow-900",
  yellow2: "yellow-600",
  purple: "purple-600",
};

interface CardInfoContainerProps {
  background: keyof typeof BACKGROUND;
}

export const CardInfoContainer = styled.div<CardInfoContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme[BACKGROUND[props.background]]};
    width: 40px;
    height: 40px;
    padding: 0.4rem;
    border-radius: 50%;
  }

  p {
    color: ${(props) => props.theme["gray-800"]};
    font-weight: 400;
  }
`;
