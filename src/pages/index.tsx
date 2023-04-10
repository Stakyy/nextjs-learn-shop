import { Inter } from "next/font/google";

import MainContainer from "@/components/MainContainer";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainContainer keywords="" title="Главная">
      <h1>Магазин бесполезных товаров</h1>
    </MainContainer>
  );
}
