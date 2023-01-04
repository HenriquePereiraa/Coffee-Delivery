import styled from "styled-components";

export const OrderCartContainer = styled.div`
  max-width: 448px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  color: ${(props) => props.theme["gray-900"]};
`;

interface OrderCartProps {
  disabled: boolean
}

export const OrderCart = styled.div<OrderCartProps>`
  padding: 30px;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 44px;

  .btn_confirm_order {
    width: 368px;
    height: 46px;
    margin-top: 24px;
    border: 0;
    border-radius: 6px;
    padding: 12px 8px 12px 8px;

    background-color: ${props => props.disabled ? props.theme["yellow-900"] : props.theme["yellow-600"] };
    color: ${(props) => props.theme["white"]};

    font-size: 0.88rem;
    font-weight: 700;
    text-transform: uppercase;

    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: color 0.4s;

    &:hover {
      background-color: ${(props) => props.theme["yellow-900"]};
    }
  }
`;

export const SummaryTotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const SummaryItemsTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme["gray-700"]};
  .total_title_items {
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 18.2px;
  }

  .total_price_items {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.2px;
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme["gray-900"]};

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 26px;
`;
