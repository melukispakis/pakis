import { ArticlePucung, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "pesona-pucung",
    "manajemen-keuangan",
    "proker-inventarisasi",
    "sosialisasi-poc",
    "sosialisasi-microgreen",
    "sosialisasi-mpasi",
    "kebersihan",
    "retaining-wall",
    "pembuatan-rab-retaining",
    "pendampingan-hafalan",
    "pendampingan-tpa",
    "posyandu",
    "pencegahan-stunting",
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

export default function PucungArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Pogalan 1 - Pucung</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticlePucung href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
