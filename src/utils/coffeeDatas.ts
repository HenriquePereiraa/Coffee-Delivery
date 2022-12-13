import coffee1 from "../assets/coffes/Type=Americano.png";
import coffee2 from "../assets/coffes/Type=Arabe.png";
import coffee3 from "../assets/coffes/Type=Cafe-com-Leite.png";
import coffee4 from "../assets/coffes/Type=Cafe-Gelado.png";
import coffee5 from "../assets/coffes/Type=Capuccino.png";
import coffee6 from "../assets/coffes/Type=Chocolate-Quente.png";
import coffee7 from "../assets/coffes/Type=Cubano.png";
import coffee8 from "../assets/coffes/Type=Expresso-Cremoso.png";
import coffee9 from "../assets/coffes/Type=Expresso.png";
import coffee10 from "../assets/coffes/Type=Havaiano.png";
import coffee11 from "../assets/coffes/Type=Irlandês.png";
import coffee12 from "../assets/coffes/Type=Latte.png";
import coffee13 from "../assets/coffes/Type=Macchiato.png";
import coffee14 from "../assets/coffes/Type=Mochaccino.png";

export const coffees = [
  {
    id:"0",
    img: coffee1,
    label: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 8.90,
  },
  {
    id:"1",
    img: coffee2,
    label: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  },
  {
    id:"2",
    img: coffee3,
    label: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 10.90,
  },
  {
    id:"3",
    img: coffee4,
    label: ["Tradicional", "gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 10.90,
  },
  {
    id:"4",
    img: coffee5,
    label: ["Tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 11.90,
  },
  {
    id:"5",
    img: coffee6,
    label: ["Tradicional", "com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 11.90,
  },
  {
    id:"6",
    img: coffee7,
    label: ["Tradicional", "com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 12.90,
  },
  {
    id:"7",
    img: coffee8,
    label: ["Tradicional", "com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espumaCafé expresso misturado com um pouco de leite quente e espuma",
    price: 11.90,
  },
  {
    id:"8",
    img: coffee9,
    label: ["Tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10.90,
  },
  {
    id:"9",
    img: coffee10,
    label: ["Tradicional", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90
  },
  {
    id:"10",
    img: coffee11,
    label: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 15.90,
  },
  {
    id:"11",
    img: coffee12,
    label: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 17.90,
  },
  {
    id:"12",
    img: coffee13,
    label: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 14.90,
  },
  {
    id:"13",
    img: coffee14,
    label: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 18.90,
  },
];
