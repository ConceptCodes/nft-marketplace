import React from "react";
import useTranslation from 'next-translate/useTranslation';
import Image from "next/image";

interface ISellerProps {
  name: string;
  avatar: string;
  rank: number;
  balance: number;
}

const Seller: React.FC<ISellerProps> = ({ name, avatar, rank, balance }) => {
  return (
    <figure className="flex flex-col w-[200px] items-center bg-primary-700 rounded-lg p-4">
      <div className="rounded-full flex  text-primary-500 font-bold items-center justify-center w-16 h-8 bg-white">
        #{rank}
      </div>
        <Image 
          src={avatar} 
          width={50} 
          height={50} 
          className="rounded-full"
          alt={name}
        />
      <figcaption className="text-white font-bold text-center mt-2">
        {name}
      </figcaption>
      <figcaption className="text-white text-center mt-2">
        {balance} <span className="font-bold">ETH</span>
      </figcaption>
    </figure>
  );
}


const PopularSellers: React.FC = () => {
  const { t } = useTranslation('landing');
  return (
    <section className="flex flex-col w-full bg-primary-200 p-20">
      <div className="flex justify-between pb-20 items-center w-full">
        <h1 className="text-3xl font-bold">{t('popularSellers.title')}</h1>
        <select className="w-56 rounded-xl">
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>
      <div className="flex justify-between overflow-x-hidden space-y-5">
        <Seller name="John Doe" avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" rank={1} balance={100} />
        <Seller name="John Doe" avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" rank={2} balance={100} />
        <Seller name="John Doe" avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" rank={3} balance={100} />
        <Seller name="John Doe" avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" rank={4} balance={100} />
        <Seller name="John Doe" avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" rank={5} balance={100} />
      </div>
    </section>
  );
};

export default PopularSellers;