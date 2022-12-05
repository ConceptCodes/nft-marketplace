import React from "react";
import useTranslation from 'next-translate/useTranslation';

const PopularSellers: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <section className="flex flex-col">
      <div className="flex justify-between w-full">
        <h1>{t('popularSellers.title')}</h1>
      </div>
    </section>
  );
};

export default PopularSellers;