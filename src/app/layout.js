import styles from "src/app/styles.module.css";
import "../styles/global.css";
import { Inter } from "@next/font/google";
import Head from "./head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head />
      <body className={styles.container}>
        <Header />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
