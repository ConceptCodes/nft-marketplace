import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { ConnectWallet } from '@thirdweb-dev/react';

const Navbar: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <nav className="w-full flex justify-between items-center p-3 border-b-2">
      <div className="flex space-x-4 items-center">
        <Link href="/" className="text-xl uppercase font-bold">{t('title')}</Link>
        <ul className="flex space-x-4">
          <Link className="font-semibold" href="/discover">{t('navbar.links.discover')}</Link>
          <Link className="font-semibold" href="/how-it-works">{t('navbar.links.howItWorks')}</Link>
        </ul>
      </div>
      <div className="flex space-x-4 items-center">
        <input type="text" placeholder="Search" className="border-2 text-black focus:border-primary border-gray-200 rounded-full w-96" />
        <Link href="/upload" className="rounded-full w-32 p-3 text-center bg-primary-600 text-white font-bold">
          {t('navbar.links.upload')}
        </Link>
        <ConnectWallet
          auth={{
            loginConfig: {
              redirectTo: '/auth/login',
              onError: (error: string) => {
                console.log(error);
              },
            },
            loginOptional: false,
            loginOptions: {
              nonce: 'nonce',
              // The optional time after which the login payload will be invalid
              // expirationTime: 60 * 60 * 24,
            },
          }}
         />
      </div>
    </nav>
  );
}

export default Navbar;
