import LogoCoffe from '../../assets/Logo.png'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { CartHeader, ContainerHeader, InfoHeader, InfoLocalization } from "./styles";
import { defaultTheme } from '../../styles/themes/default';

export function Header() {
  return (
    <ContainerHeader>
        <img src={LogoCoffe} alt="" />
        <InfoHeader>
          <InfoLocalization>
            <MapPin size={26} color={defaultTheme['purple-600']} weight="fill"/>
            <strong>Recife, PE</strong>
          </InfoLocalization>
          <CartHeader> 
            <ShoppingCart size={26} color={defaultTheme['yellow-600']} weight="fill"/>
          </CartHeader>
        </InfoHeader>
    </ContainerHeader>
  )
}
