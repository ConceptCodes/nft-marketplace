import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { ConnectWallet } from '@thirdweb-dev/react';

const Navbar: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <nav className="w-full flex justify-between items-center pb-3 border-b-2">
      <div className="flex space-x-4 items-center">
        <h1 className="text-2xl uppercase font-bold">{t('title')}</h1>
        <ul className="flex space-x-4">
          <Link className="font-semibold" href="/discover">{t('navbar.links.discover')}</Link>
          <Link className="font-semibold" href="/how-it-works">{t('navbar.links.howItWorks')}</Link>
        </ul>
      </div>
      <div className="flex space-x-4 items-center">
        <input type="text" placeholder="Search" className="border-2 text-black focus:border-primary border-gray-200 rounded-full w-96" />
        <button className="rounded-full w-32 p-3 bg-primary-600 text-white font-bold">
          {t('navbar.links.upload')}
        </button>
        <ConnectWallet />
      </div>
    </nav>
  );
}

export default Navbar;
