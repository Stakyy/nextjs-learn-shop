import axios from "axios";

const Categories = () => {
  return <div>categories</div>;
};

export default Categories;

export async function getStaticProps(context: any) {
  console.log(context);

  const response = await axios.get(`https://fakestoreapi.com/products`);
  const data = response.data;

  return {
    props: { data },
  };
}
