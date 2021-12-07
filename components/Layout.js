import Navbar from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
