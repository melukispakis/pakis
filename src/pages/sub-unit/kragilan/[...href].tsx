import {
  ArticleKragilan,
  ContainerArticle,
  Footer,
  Navbar,
} from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "pesona-semampiran",
    "kompos",
    "perangkap-tikus",
    "revitalisasi-pos",
    "tambah-darah",
    "penyakit-ternak",
    "pmt-balita",
    "materi",
    "sosialisasi-google",
    "video-profil",
  ];
  const paths = routes.map((route) => {
    return { params: { href: route.split("/") } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  return { props: { href: params.href } };
}

export default function KragilanArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Kragilan</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleKragilan href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
