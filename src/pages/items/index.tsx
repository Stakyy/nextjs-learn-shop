import CardItem from "@/components/CardItem";
import axios from "axios";
import styles from "@/styles/Items.module.scss";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";

export interface ICardItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

interface Iprops {
  data: ICardItem[];
}

const Items = ({ data }: Iprops) => {
  const router = useRouter();
  console.log(router);
  return (
    <MainContainer keywords={""} title={"Товары"}>
      <div className={styles.items}>
        {data.map((item: ICardItem) => (
          <CardItem {...item} id={item.id} key={item.id} />
        ))}
      </div>
    </MainContainer>
  );
};

export default Items;

export async function getStaticProps(context: any) {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;

  return {
    props: { data },
  };
}
