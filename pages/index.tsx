import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import PopularSellers from "../components/PopularSellers";
import TrendingCollections from '../components/TrendingCollections';
import CountDown from "../components/CountDown";
import Link from "next/link";
import Icon from "../components/Icon";

const Home: NextPage = () => {
  const { t: common } = useTranslation("common");
  const { t: landing } = useTranslation("landing");
  return (
    <>
      <Head>
        <title>{common("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center space-y-3 w-full justify-center text-center">
        <section className="py-20 space-y-3 pb-32">
          <p className="font-bold text-gray-300">
            {landing("banner.subtitle")}
          </p>
          <h1 className="text-5xl pb-10 font-bold">{landing("banner.title")}</h1>
          <Link href="/discover" className="rounded-full p-2 border-2 font-bold border-black">
            {landing("banner.button")}
          </Link>
        </section>

        <section className="flex justify-between w-full h-[600px] px-20">
          <Image
            alt=""
            className="rounded-xl w-1/2 shadow-lg"
            src="https://images.unsplash.com/photo-1670140274562-2496ccaa5271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            width={300}
            height={200}
          />
          <article className="flex w-1/3 flex-col space-y-4">
            <h1 className="text-4xl text-left font-bold">Name of 3D Print</h1>
            <div className="flex items-center justify-between">
              <figure className="flex space-x-3">
                <Image
                  alt=""
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  width={50}
                  height={50}
                />
                <figcaption className="flex flex-col justify-center">
                  <p className="font-bold text-sm text-gray-300">
                    {landing("banner.creator")}
                  </p>
                  <p className="text-xl font-bold">Location</p>
                </figcaption>
              </figure>
              <figure className="flex items-center space-x-3">
                <figure className="h-12 w-12 rounded-full bg-primary-600"></figure>
                <figcaption className="flex flex-col justify-center">
                  <p className="font-bold text-sm text-gray-300">
                    {landing("banner.price")}
                  </p>
                  <p className="text-xl font-bold">1.23 ETH</p>
                </figcaption>
              </figure>
            </div>
            <article className=" flex flex-col items-center space-y-5 h-[300px] p-4 w-full rounded-lg bg-primary-200">
              <p className="font-bold">3D Model</p>
              <h1 className="text-4xl font-bold">1.00 ETH</h1>
              <h3>$3,000</h3>
              <h2 className="text-gray-400">{landing("banner.bid.auction")}</h2>
              <CountDown targetDate={new Date('12/07/2022')} />
            </article>

            <button className="rounded-full p-2 text-white w-full bg-primary-600 font-bold">
              {landing("banner.bid.button1")}
            </button>

            <button className="rounded-full p-2 w-full border-2 font-bold border-black">
              {landing("banner.bid.button2")}
            </button>

            <section className="object-none object-right">
              <div className="flex space-x-3">
                <button className="">
                  <Icon name="arrow-left" />
                </button>
                <button className="">
                  <Icon name="arrow-right" />
                </button>
              </div>
            </section>
          </article>
        </section>
        <PopularSellers />
        <TrendingCollections />
      </main>
    </>
  );
};

export default Home;
