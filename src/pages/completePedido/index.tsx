import ConfirmOrderCart from "../../components/ConfirmOrderCart";
import { CompleteOrderContainer, ConfirmOrderContainer } from "./styles";
import { FormsConfirmOrder } from "./FormsConfirmOrder";
import { ModePayment } from "./ModePayment";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(9, "informe o CEP completo").max(9, "CEP inválido"),
  rua: zod.string().min(1),
  numero: zod.number().min(1, "Informe o numero de sua residência"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe seu bairro"),
  cidade: zod.string().min(1, "Informe seu bairro"),
  uf: zod.string().min(2, "Informe o UF de sua cidade").max(2, "UF inválido"),
});

type addressFormData = zod.infer<typeof addressFormValidationSchema>;

export function ConfirmOrder() {
  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: 0,
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const { handleSubmit } = addressForm;

  function handleSendData(data: addressFormData) {
    console.log(data);
  }

  return (
    <ConfirmOrderContainer>
      <form onSubmit={handleSubmit(handleSendData)}>
        <CompleteOrderContainer>
          <h3>Complete seu pedido</h3>
          <FormProvider {...addressForm}>
            <FormsConfirmOrder />
          </FormProvider>
          <ModePayment />
        </CompleteOrderContainer>
        <ConfirmOrderCart />
      </form>
    </ConfirmOrderContainer>
  );
}
