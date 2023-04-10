import React from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const NAVIGATION = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Товары", path: "/items" },
  { id: 3, title: "Корзина", path: "/cart" },
  { id: 4, title: "Контакты", path: "#" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <ul>
        {NAVIGATION.map((item) => (
          <li
            key={item.id}
            className={pathname === item.path ? styles.active : ""}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
