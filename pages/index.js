import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Ova from "../components/ova";

import Image from "next/image";

import data from '../public/json/ovas/pestel.json';
import html from '../public/html/ovas/pestel.html';
import css from '../public/css/ovas/pestel.module.css';

export default function Home() {
   return (
      <>
         <Head>
            <title>OVAS TPI</title>
            <meta name="description" content="OVAS TPI UNAL" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/ovas/template/QV_logo.svg" />
         </Head>
         <div className={styles.header} />
         <main className={styles.main}>
            <div className={styles.navBar} />
            {/* <Ova data={data} html={html} css={css} /> */}

            {/* <object id="ovaNavBar" className={styles.navbar}
               type="image/svg+xml" data="/images/ovas/template/ovaNavBar.svg" /> */}
            <Image src="./images/ovas/template/ovaNavBar.svg" alt="An SVG of an eye" height={200} width={200} />

         </main>
      </>
   );
}