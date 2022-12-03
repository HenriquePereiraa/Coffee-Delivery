import { ButtonPaymentMode } from "./styles";

interface ButtomCustomProps {
  Icon: JSX.Element;
  title: string;
}

export default function ButtonCustom({ Icon, title }: ButtomCustomProps) {
  return (
    <ButtonPaymentMode actived={true} width={91} height={32} uppercase={true}>
      {Icon}
      {title}
    </ButtonPaymentMode>
  );
}
