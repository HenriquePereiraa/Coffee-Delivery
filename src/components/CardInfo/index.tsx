import { CardInfoContainer } from "./styles";

interface CardInfoProps {
  Icon?: JSX.Element;
  title: string;
  background: "gray" | "yellow1" | "yellow2" | "purple";
}

export function CardInfo({ Icon, title, background }: CardInfoProps) {
  return (
    <CardInfoContainer background={background}>
      <div>{Icon}</div>
      <p>{title}</p>
    </CardInfoContainer>
  );
}
