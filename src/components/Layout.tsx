import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: IProps) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </>
);

export default Layout;
