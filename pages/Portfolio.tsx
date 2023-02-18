import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ProfileForm from "../components/ProfileForm";
import PortfolioPage from "../components/PortlioComponents/PortfolioPage";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-row w-full py-10">
        <SideBar />
        <PortfolioPage />
      </main>
    </div>
  );
};

export default Home;
