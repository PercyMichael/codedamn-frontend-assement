import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

import SideBar from "../components/SideBar";
import ProfileForm from "../components/ProfileForm";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-row w-full py-10 gap-10">
        <SideBar />
        <ProfileForm />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
};

export default Home;
