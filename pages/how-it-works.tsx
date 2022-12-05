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
        <section className="flex space-x-6 align-top justify-between">
          <ul className="space-y-5">
            <li className="flex space-x-3 items-center">
              <Icon name="home" focused />
              <h3 className="text-2xl font-bold">{t('accordion.legend.general')}</h3>              
            </li>
            <li className="flex space-x-3 items-center">
              <Icon name="support" />
              <h3 className="text-2xl font-bold">{t('accordion.legend.support')}</h3>              
            </li>
            <li className="flex space-x-3 items-center">
              <Icon name="product" />
              <h3 className="text-2xl font-bold">{t('accordion.legend.product')}</h3>              
            </li>
          </ul>

          <div className="flex-grow-0">
            <Accordion 
              content={[{
                title: t('accordion.content.general.0.title'),
                content: t('accordion.content.general.0.desc'),
                button: {
                  text: t('accordion.content.general.0.button'),
                  onClick: () => console.log('general clicked')
                }
              },
              {
                title: t('accordion.content.general.1.title'),
                content: t('accordion.content.general.1.desc'),
                button: {
                  text: t('accordion.content.general.1.button'),
                  onClick: () => console.log('general clicked')
                }
              },
            ]}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default HowItWorksPage