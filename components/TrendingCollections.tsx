import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

interface Card {
  title: string;
  name: string;
  avatar: string;
}

const Card: React.FC<Card> = ({ name, title, avatar }) => {
  return (
    <div className="flex flex-col w-[400px] border-2 space-y-4 items-center rounded-lg p-4">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        width={250}
        height={200}
        className="rounded-lg"
      />
      <div className="flex justify-evenly w-full">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-2">
          <Image alt="" src={avatar} width={50} height={50} className="rounded-full" />
          <h1 className="">{name}</h1>
        </div>
        <div className="flex items-center w-32 text-sm p-3 border-2">
          38 ITEMS
        </div>
    </div>
  </div>
  );
};

const TrendingCollections: React.FC = () => {
  const { t } = useTranslation("landing");
  return (
    <section className="flex flex-col w-full p-20">
      <div className="flex justify-between pb-20 items-center w-full">
        <h1 className="text-3xl font-bold">{t("trendingCollections.title")}</h1>
        <div className="flex"></div>
      </div>
      <div className="flex justify-between overflow-x-hidden space-y-5">
        <Card 
          title="Awesome Collection" 
          name="John Doe"
          avatar="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" 
        />
        <Card 
          title="Awesome Collection" 
          name="John Doe"
          avatar="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" 
        />
        <Card 
          title="Awesome Collection" 
          name="John Doe"
          avatar="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" 
        />
      </div>
    </section>
  );
};

export default TrendingCollections;
