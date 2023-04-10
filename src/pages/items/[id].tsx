import axios from "axios";
import { ICardItem } from ".";
import MainContainer from "@/components/MainContainer";
import { Button, Image } from "antd";
import styles from "@/styles/Items.module.scss";

interface Iprops {
  item: ICardItem;
}
interface IServerSideProps {
  params: { id: string };
}

const addToCart = async (params: any) => {
  axios.post("/api/cartApi", { item: params });
};

export default function Item({ item }: Iprops) {
  return (
    <MainContainer keywords={""} title={item.title}>
      <h1>{item.title}</h1>
      <div className={styles.card}>
        <Image src={item.image} width={600} height={500} />
        <div className={styles.infoBlock}>
          <div className={styles.price}>${item.price}</div>
          <div className={styles.description}>{item.description}</div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
          >
            Купить
          </Button>
        </div>
        {/* <div></div> */}
      </div>
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  const data = response.data;
  const paths = data.map(({ id }: any) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const data = response.data;
  return {
    props: { item: data },
  };
}
