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
  console.log(req.body, "asdaasdasdasd");
  if (req.method === "GET") {
    res.status(200).json({ cart: cart });
  }
  if (req.method === "POST") {
    cart.push(req.body.item);

    res.status(200).json({ cart: cart });
    return;
  }
  if (req.method === "DELETE") {
    console.log("req.body", req.body);
    cart = cart.filter((item) => item.id !== req.body);
    console.log("DELETE", cart);

    res.status(200).json({ cart: cart });
    return;
  }
}
