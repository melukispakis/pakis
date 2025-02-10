import { ArticleSaintek, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "pembuatan-peta",
    "prototipe-instalasi",
    "desain-retaining",
    "pelatihan-anbk",
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

export default function SaintekArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Klaster Saintek</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleSaintek href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
