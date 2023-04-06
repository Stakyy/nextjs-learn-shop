import CardItem from "@/components/CardItem";
import axios from "axios";
import styles from "@/styles/Items.module.scss";
import MainContainer from "@/components/MainContainer";

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
  return (
    <MainContainer keywords={""} title={"Товары"}>
      <div className={styles.items}>
        {data.map((item: ICardItem) => (
          <CardItem {...item} id={item.id} />
        ))}
      </div>
    </MainContainer>
  );
};

export default Items;

export async function getStaticProps() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;

  return {
    props: { data },
  };
}
