import type { NextApiRequest, NextApiResponse } from "next";
import { ICardItem } from "../items";
// import { cart } from "./store/store";

type Data = {
  cart: ICardItem[];
};

let cart: ICardItem[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ cart: cart });
  }
  if (req.method === "POST") {
    cart = [...cart, req.body.item];

    res.status(200).json({ cart: cart });
    return;
  }
  if (req.method === "DELETE") {
    console.log("req.body", req.body);

    const newCart = JSON.parse(JSON.stringify(cart));
    cart = [];
    cart = newCart.filter((item: any) => item.id !== req.body);

    res.status(200).json({ cart: cart });
    return;
  }
}
