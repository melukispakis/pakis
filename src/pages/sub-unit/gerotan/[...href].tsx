import { ArticleGerotan, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "tpa",
    "pelatihan-excel",
    "digitalisasi-umkm",
    "kelas-tik",
    "peta-lahan",
    "perangkap-kuning",
    "ph-tanah",
    "pengenalan-web-skrining",
    "senam-kebugaran",
    "edukasi-keuangan",
    "perizinan-mata-air",
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
        <title>Ketundan 1 - Gerotan</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleGerotan href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
