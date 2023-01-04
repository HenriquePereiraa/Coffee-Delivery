import LogoCoffe from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartHeader,
  ContainerHeader,
  InfoHeader,
  InfoLocalization,
  CoffeeAmountInCart,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoffeeCartContext } from "../../context/CoffeeContext";

export function Header() {
  const navigate = useNavigate();

  const { coffees } = useContext(CoffeeCartContext);

  function handleNavigationHome() {
    navigate("/");
  }

  function handleNavigationConfirmOrder() {
    navigate("/confirmar-pedido");
  }

  return (
    <ContainerHeader>
      <img
        src={LogoCoffe}
        alt="logo coffee delivery"
        onClick={handleNavigationHome}
      />
      <InfoHeader>
        <InfoLocalization>
          <MapPin size={26} color={defaultTheme["purple-600"]} weight="fill" />
          <strong>Recife, PE</strong>
        </InfoLocalization>
        <CartHeader onClick={handleNavigationConfirmOrder}>
          {coffees.length > 0 ? <CoffeeAmountInCart>{coffees.length}</CoffeeAmountInCart> : ''}
          <ShoppingCart
            size={26}
            color={defaultTheme["yellow-600"]}
            weight="fill"
          />
        </CartHeader>
      </InfoHeader>
    </ContainerHeader>
  );
}
