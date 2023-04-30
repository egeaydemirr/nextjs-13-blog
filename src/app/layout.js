import styles from "src/app/styles.module.css";
import "../styles/global.css";
import { Inter } from "@next/font/google";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head />
      <body className={styles.container}>
        <header className={inter.className}>
          <p>Header</p>
        </header>
        <main className={inter.className}>{children}</main>
        <footer className={inter.className}>Footer</footer>
      </body>
    </html>
  );
}
