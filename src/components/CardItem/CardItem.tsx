import { Button, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../../styles/Card.module.scss";
import Image from "next/image";
import axios from "axios";

export interface ICardItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
const addToCart = async (params: ICardItem) => {
  axios.post("api/cartApi", { item: params });
};
export const CardItem = (data: ICardItem) => {
  return (
    <div className={styles.card}>
      <Link href={`/items/${data.id}`}>
        <Card
          hoverable
          style={{ width: 240, height: 550, padding: 10 }}
          cover={
            <Image height={300} width={250} alt={data.title} src={data.image} />
          }
          id={`${data.id}`}
        >
          <div className={styles.bottom}>
            <h4 className={styles.title}>{data.title}</h4>
            <div className={styles.actions}>
              <div className={styles.price}>{data.price}</div>
              <Button
                icon={<ShoppingCartOutlined />}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(data);
                }}
              >
                Купить
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};
