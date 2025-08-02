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
                <div className="bg-gray-100 min-h-screen p-6 pt-24">
                    <h1 className="mb-4 text-center text-3xl font-bold">
                        Peta Lokasi Kecamatan Pakis
                    </h1>
                    <div className="mx-auto mb-6 text-center">
                        <p className="text-gray-700">
                            Peta interaktif menampilkan lokasi kegiatan KKN-PPM UGM 2025 di
                            Pakis. Klik marker untuk info selengkapnya.
                        </p>
                    </div>
                    <div className="border-gray-300 mx-auto w-full max-w-5xl overflow-hidden rounded-xl border shadow-lg">
                        <Peta />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}