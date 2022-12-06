import { CardInfoConfirmedOrderContainer } from "./styles";

interface CardInfoConfirmedOrderProps {
  Icon?: JSX.Element;
  title: string;
  description: string;
  background: "gray" | "yellow1" | "yellow2" | "purple";
}

export function CardInfoConfirmedOrder({
  Icon,
  title,
  description,
  background,
}: CardInfoConfirmedOrderProps) {
  return (
    <CardInfoConfirmedOrderContainer background={background}>
      <div className="icon">{Icon}</div>
      <div className="card_info__confirmed_order__content">
        <p>{title}</p>
        <strong>{description}</strong>
      </div>
    </CardInfoConfirmedOrderContainer>
  );
}
