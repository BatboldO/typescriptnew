import React from "react"
import { ProductType } from "@/pages/index";

type Props = {
    data: ProductType;
};

export default function Card ({ data }: Props) {
    // const price: number = 
    //  typeof data.price == "number" ? data.price : data.price.original
    return (
        <div>
        <p>{data.name}</p>
        <p>{data.price}</p>
        <p>{data.manufactured}</p>
        </div>
    )
}