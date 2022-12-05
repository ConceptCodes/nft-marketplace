import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Accordion from '../components/Accordion'
import Icon from '../components/Icon'

const HowItWorksPage: NextPage = () => {
  const { t } = useTranslation('howItWorks')
  return (
    <>
      <Head>
        <title>How It Works</title>
      </Head>
      <main className="flex flex-col p-20">
        <section className='space-y-3 w-full'>
          <h3 className="text-md text-primary-700 font-bold uppercase">{t('banner.subtitle')}</h3>
          <h3 className="text-6xl font-bold">{t('banner.title')}</h3>
          <p className="text-lg w-1/2 text-gray-400">{t('banner.desc')}</p>
        </section>
        <section className="flex space-between">
          <ul>
            <li className="flex space-x-3">
              <Icon name="home" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">{t('general.title')}</h3>
                <p className="text-lg text-gray-400">{t('general.desc')}</p>
              </div>
            </li>
          </ul>

        </section>
      </main>
    </>
  )
}

export default HowItWorksPage