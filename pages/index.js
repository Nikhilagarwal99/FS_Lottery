import Image from "next/image";
import Head from "next/head";
import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

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
