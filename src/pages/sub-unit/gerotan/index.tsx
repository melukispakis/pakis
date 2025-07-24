import { Gerotan, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function PucungPage() {
  return (
    <>
      <Head>
        <title>Ketundan 1 - Gerotan</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Gerotan />
        <Footer />
      </main>
    </>
  );
}
