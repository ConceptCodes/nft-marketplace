import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Link from  'next/link'

interface ICardProps {
  title: string
  imgSrc: string
}

const Card: React.FC<ICardProps> = ({ title, imgSrc }) => {
  return (
    <Link href={`/upload/${title.toLowerCase()}`}>
      <div className="flex flex-col hover:border-primary-600 items-center border-2 p-4 justify-center w-[200px] lg:w-[300px] rounded-lg">
        <Image
          src={imgSrc}
          alt={title}
          width={200}
          height={200}
          className="rounded-lg lg:w-[300px] lg:h-[300px]"
        />
        <button className="mt-2 text-lg p-3 rounded-full border-2 font-bold">{title}</button>
      </div>
    </Link>
    )
}


const UploadPage: NextPage = () => {
  const { t } = useTranslation('upload')
  return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen space-y-6 justify-center">
        <h1 className="text-6xl font-bold">{t('title')}</h1>
        <h3 className="text-gray-300 text-md">{t('subtitle')}</h3>
        <section className="flex space-x-5">
          <Card title="Single" imgSrc="https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
          <Card title="Multiple" imgSrc="https://images.unsplash.com/photo-1645731507198-bafe5986bf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80" />
        </section>
        <p className="text-primary-600 font-medium">{t('disclaimer')}</p>
      </main>
    </>
  )
}

export default UploadPage