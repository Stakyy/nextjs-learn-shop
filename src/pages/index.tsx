import { Inter } from "next/font/google";

import MainContainer from "@/components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainContainer keywords="" title="Главная">
      <h1>Магазин бесполезных товаров</h1>
    </MainContainer>
  );
}
