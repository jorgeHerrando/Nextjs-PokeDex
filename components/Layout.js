import Navbar from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
