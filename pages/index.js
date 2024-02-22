import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Smart Contract Lottery</title>
      </Head>
      {/* Header/connect button navbar */}
      {/* <ManualHeader /> */}
      <Header />
      <LotteryEntrance />
    </main>
  );
}
