import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SocialsForm from "../components/ProfileForm";

const Socials: NextPage = () => {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto">
      <Head>
        <title>Form Socials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-row w-full py-10 gap-10">
        <SideBar />

        <SocialsForm />
      </main>
    </div>
  );
};

export default Socials;
