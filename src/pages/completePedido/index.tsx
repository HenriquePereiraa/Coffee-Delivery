import {CompleteOrder, ConfirmOrderContainer, OrderCart} from './styles'

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
      </CompleteOrder>
      <OrderCart>
        <h2>Cafés selecionados</h2>
      </OrderCart>
    </ConfirmOrderContainer>
  )
}
