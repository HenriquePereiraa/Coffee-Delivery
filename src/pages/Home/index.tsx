import { CardInfo } from "../../components/CardInfo";
import {
  CardsInfoContainer,
  HomeBanner,
  HomeContainer,
  HomeContent,
  HomeContentBanner,
  HomeContentInfo,
  HomeNossosCafe,
  ListCoffees,
} from "./styles";

import Banner from "../../assets/banner.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "../../components/CoffeeCard";
import { coffees } from "../../utils/coffeeDatas";

export function Home() {
  const contentForCardInfo = [
    {
      id: 0,
      icon: <ShoppingCart size={30} color="white" weight="fill" />,
      title: "Compra simples e segura",
      color: "yellow1",
    },
    {
      id: 1,
      icon: <Package size={30} color="white" weight="fill" />,
      title: "Embalagem mantém o café intacto",
      color: "gray",
    },
    {
      id: 2,
      icon: <Timer size={30} color="white" weight="fill" />,
      title: "Entrega rápida e rastreada",
      color: "yellow2",
    },
    {
      id: 3,
      icon: <Coffee size={30} color="white" weight="fill" />,
      title: "O café chega fresquinho até você",
      color: "purple",
    },
  ];

  const coffeesInfo = coffees;

  return (
    <HomeContainer>
      <HomeBanner>
        <HomeContent>
          <HomeContentInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className="test">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <CardsInfoContainer>
              {contentForCardInfo.map((cards) => {
                return (
                  <CardInfo
                    key={cards.id}
                    Icon={cards.icon}
                    title={cards.title}
                    background={cards.color}
                  />
                );
              })}
            </CardsInfoContainer>
          </HomeContentInfo>
          <HomeContentBanner src={Banner} alt="banner coffe delivery" />
        </HomeContent>
      </HomeBanner>
      <HomeNossosCafe>
        <h2>Nossos cafés</h2>
        <ListCoffees>
          {coffeesInfo?.map((coffee) => {
            return (
              <CoffeeCard
                image={coffee.img }
                labels={coffee.label}
                title={coffee.title}
                description={coffee.description}
                price={coffee.price}
                key={coffee.title}
              />
            );
          })}
        </ListCoffees>
      </HomeNossosCafe>
    </HomeContainer>
  );
}
