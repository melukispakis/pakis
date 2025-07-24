import { Footer, Kragilan, Navbar } from "@/components";
import Head from "next/head";

export default function GerduPage() {
  return (
    <>
      <Head>
        <title>Kragilan</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Kragilan />
        <Footer />
      </main>
    </>
  );
}
