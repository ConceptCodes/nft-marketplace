import { useRouter } from 'next/router'
import type { NextPage } from 'next'

const ItemPage: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h1>Item: {slug}</h1>;
}

async function getStaticPaths() {
  return {
    paths: [
      // will be passed to the page component as props
      { params: { slug: ['id'] } },
    ],
    fallback: false,
  }
}

async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  }
}

export default ItemPage

