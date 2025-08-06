import dynamic from "next/dynamic";
import { Navbar, Footer } from "@/components";
import Head from "next/head";

const Peta = dynamic(() => import("../../components/map/Peta"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>KKN-PPM UGM Pakis 2025</title>
                <link rel="icon" href="/logo-pakis.png" />
            </Head>
            <main>
                <Navbar />
                <div className="min-h-screen bg-gray-100 px-4 pt-28 pb-10 md:px-8">
                    <h1 className="mb-6 text-center text-2xl font-bold md:text-3xl">
                        Peta Lahan Pertanian Dusun Gerotan
                    </h1>
                    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-gray-300 bg-white shadow">
                        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9]">
                            <Peta />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
