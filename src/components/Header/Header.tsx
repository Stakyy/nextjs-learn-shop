import Navbar from "../NavBar/NavBar";
import styles from "../../styles/Header.module.scss";

const Header = () => (
  <header className={styles.mainHeader}>
    <Navbar />
  </header>
);

export default Header;
