import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { CardInfoConfirmedOrder } from "../../components/CardInfoConfirmedOrder";
import { ConfirmedOrderContainer, InfoConfirmedOrder } from "./styles";

import ConfirmedOrderBanner from "../../assets/banner-confirmed-order.png";

export function ConfirmedOrder() {
  const infosConfirmedOrderDeliveryInformation = [
    {
      title: "Entrega em Rua João Daniel Martinelli, 102",
      description: "Farrapos - Porto Alegre, RS",
      color: "purple",
      icon: <MapPin size={30} color="white" weight="fill" />,
    },
    {
      title: "Previsão de entrega",
      description: "20 min - 30 min",
      color: "yellow2",
      icon: <Timer size={30} color="white" weight="fill" />,
    },
    {
      title: "Pagamento na entrega",
      description: "Cartão de Crédito",
      color: "yellow1",
      icon: <CurrencyDollar size={30} color="white" weight="fill" />,
    },
  ];

  return (
    <ConfirmedOrderContainer>
      <InfoConfirmedOrder>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <div className="confirmed_order__delivery_information">
          {infosConfirmedOrderDeliveryInformation.map((item) => {
            return (
              <CardInfoConfirmedOrder
                key={item.title}
                title={item.title}
                description={item.description}
                background={item.color}
                Icon={item.icon}
              />
            );
          })}
        </div>
      </InfoConfirmedOrder>
      <img src={ConfirmedOrderBanner} alt="Image pedido confirmado" />
    </ConfirmedOrderContainer>
  );
}
