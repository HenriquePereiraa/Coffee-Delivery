import { ButtonPaymentMode } from "./styles";

interface ButtomCustomProps {
  id:string;
  Icon: JSX.Element;
  title: string;
  handleButton: (id: string) => void
}

export default function ButtonCustom({
  id,
  Icon,
  title,
  handleButton
}: ButtomCustomProps) {

  function handleButtonCart() {
    handleButton(id)
  }
  return (
    <ButtonPaymentMode
      onClick={handleButtonCart}
      actived={true}
      width={91}
      height={32}
      uppercase={true}
    >
      {Icon}
      {title}
    </ButtonPaymentMode>
  );
}
