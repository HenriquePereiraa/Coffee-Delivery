import ConfirmOrderCart from "../../components/ConfirmOrderCart";
import { CompleteOrderContainer, ConfirmOrderContainer } from "./styles";
import { FormsConfirmOrder } from "./FormsConfirmOrder";
import { ModePayment } from "./ModePayment";
import { useNavigate } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(9, "informe o CEP completo").max(9, "CEP inválido"),
  rua: zod.string().min(1),
  numero: zod.number().min(1, "Informe o numero de sua residência"),
  complemento: zod.string().min(1),
  bairro: zod.string().min(1, "Informe seu bairro"),
  cidade: zod.string().min(1, "Informe seu bairro"),
  uf: zod.string().min(2, "Informe o UF de sua cidade").max(2, "UF inválido"),
});

type addressFormData = zod.infer<typeof addressFormValidationSchema>;

export function ConfirmOrder() {
  const [modePayment, setModePayment] = useState("");
  const navigate = useNavigate();

  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const { handleSubmit } = addressForm;

  function handleSendData(data: addressFormData) {
    if (modePayment === "") {
      alert("Selecione um mode de pagamento");
      return;
    }
    console.log(data);
    console.log(modePayment);
    navigate(
      `/pedido-confirmado/${data.rua}/${data.numero}/${data.bairro}/${data.cidade}/${data.uf}/${modePayment}`
    );
  }

  return (
    <ConfirmOrderContainer>
      <form onSubmit={handleSubmit(handleSendData)}>
        <CompleteOrderContainer>
          <h3>Complete seu pedido</h3>
          <FormProvider {...addressForm}>
            <FormsConfirmOrder />
          </FormProvider>
          <ModePayment handleModePayment={setModePayment} />
        </CompleteOrderContainer>
        <ConfirmOrderCart />
      </form>
    </ConfirmOrderContainer>
  );
}
