import MainContainer from "@/components/MainContainer";
import axios from "axios";
import { ICardItem } from "./items";
import Image from "next/image";
import Heading from "@/components/Heading";
import { Button } from "antd";
import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.scss";

interface Iprops {
  data: ICardItem[];
}

const Cart = ({ data }: Iprops) => {
  const [cart, setCart] = useState<ICardItem[]>();
  useEffect(() => {
    setCart(data);
  }, []);
  const deleteFromCart = async (params: number) => {
    const response = await axios.delete("api/cartApi", { data: params });
    if (response.status === 200) {
      setCart(cart?.filter((item) => item.id !== params));
    }
  };
  return (
    <MainContainer keywords={""} title={"Корзина"}>
      <>
        <Heading tag="h1" text="Корзина" />
        {cart &&
          cart?.map((data) => (
            <div className={styles.cartItem}>
              <Image
                height={50}
                width={50}
                alt={data?.title}
                src={data?.image}
              />
              <div className={styles.info}>
                <div>{data?.title}</div>
                <div className={styles.price}>${data?.price}</div>
              </div>
              <Button onClick={() => deleteFromCart(data.id)}>Удалить</Button>
            </div>
          ))}
      </>
    </MainContainer>
  );
};

export default Cart;

export async function getStaticProps(context: any) {
  const response = await axios.get(`http://localhost:3000/api/cartApi`);

  const data = response.data;
  console.log("data", data);

  return {
    props: { data: data.cart },
  };
}
