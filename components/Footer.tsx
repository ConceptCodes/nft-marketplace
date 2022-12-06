import React from "react";
import useTranslation from "next-translate/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="flex justify-between items-center w-full p-10 border-t-2">
      <section className="flex flex-col">
        <h1 className="font-bold text-2xl">{t('title')}</h1>
        <p className="text-4xl w-96 text-gray-300">{t('description')}</p>
      </section>
      <section className="flex flex-col">
        <h1 className="font-bold text-2xl">{t('footer.links.0.title')}</h1>
        <a href="" className="text-lg text-gray-300">{t('footer.links.0.redirect.0')}</a>
        <a href="" className="text-lg text-gray-300">{t('footer.links.0.redirect.1')}</a>
      </section>
      <section className="flex flex-col">
        <h1 className="font-bold text-2xl">{t('footer.links.1.title')}</h1>
        <a href="" className="text-lg text-gray-300">{t('footer.links.1.redirect.0')}</a>
        <a href="" className="text-lg text-gray-300">{t('footer.links.1.redirect.1')}</a>
      </section>
      <section className="flex flex-col text-right">
        <h1 className="font-bold text-2xl">{t('footer.newsletter.title')}</h1>
        <p className="text-lg w-96 text-gray-300">{t('footer.newsletter.subtitle')}</p>
        <input type="text" className="w-96 h-10 mt-5 p-2 rounded-full border-black border-2" placeholder={t('footer.newsletter.placeholder')} />
      </section>
    </footer>
  );
}

export default Footer;
