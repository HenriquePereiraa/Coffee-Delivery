import { MapPinLine } from "phosphor-react";
import { CompleteOrder, InputForm, TitleCofirmPayment } from "./styles";
import { defaultTheme } from "../../../styles/themes/default";
import { useFormContext } from "react-hook-form";

export function FormsConfirmOrder() {
  const { register } = useFormContext();

  return (
    <CompleteOrder>
      <TitleCofirmPayment>
        <MapPinLine
          size={22}
          color={defaultTheme["yellow-600"]}
          className="icon"
        />
        <div className="chamada_titulo_complete_order">
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleCofirmPayment>

      <div className="form">
        <div className="inputContainer">
          <InputForm
            type="text"
            placeholder="CEP"
            maxWidth={200}
            {...register("cep")}
          />
        </div>
        <div className="inputContainer">
          <InputForm type="text" placeholder="Rua" {...register("rua")} />
        </div>
        <div className="inputContainer">
          <InputForm
            type="text"
            placeholder="Número"
            maxWidth={200}
            {...register("numero", { valueAsNumber: true })}
          />
          <InputForm
            type="text"
            placeholder="Complemento"
            maxWidth={348}
            {...register("complemento")}
          />
        </div>
        <div className="inputContainer">
          <InputForm
            type="text"
            placeholder="Bairro"
            maxWidth={200}
            {...register("bairro")}
          />
          <InputForm
            type="text"
            placeholder="Cidade"
            maxWidth={276}
            {...register("cidade")}
          />
          <InputForm
            type="text"
            placeholder="UF"
            maxWidth={60}
            {...register("uf")}
          />
        </div>
      </div>
    </CompleteOrder>
  );
}
