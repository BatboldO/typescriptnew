// import Header from "@/components/header"
// import Card from "@/components/Card"
// import {useState} from "react"


 export type ProductType = {
  name: string;
 price: number;
 quantity: number;
 manufactured: string;
 };

const products: Array<ProductType> = [
{

  name:"iphone12",
  price:12000,
  quantity:12,
  manufactured: "china"
},
{

  name:"iphone12",
  price:12000,
  quantity:12,
  manufactured: "china"
},
{

  name:"iphone12",
  price:12000,
  quantity:12,
  manufactured: "china"
},
{

  name:"iphone12",
  price:12000,
  quantity:12,
  manufactured: "china"
}
];

//  export default function Home (): React.ReactElement  {
//   const  [count, setCount]
//   return (
//     <main>
//       <Header/>
//       {products.map((prod:ProductType) => (
//         <Card data = {products} />
//       ))}
//     </main>
//   );
//  }