import Head from "next/head";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { dataAllTeams } from "@/components";

export default function AllTeamsPage() {
  return (
    <>
      <Head>
        <title>KKN-PPM UGM Pakis 2025</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <div className="mb-12 mt-32 grid grid-cols-1 place-items-center gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {dataAllTeams.map(({ name, image, fakultas }, index) => (
            <div
              key={index}
              className="cardDeveloper w-full max-w-[300px] overflow-hidden rounded-[24px] bg-cream p-6 lg:max-w-[320px] lg:p-8"
              data-aos="zoom-in"
            >
              <div className="cardDeveloper-info flex flex-col items-center gap-4">
                {/* Avatar */}
                <div className="cardDeveloper-avatar relative aspect-[3/4] w-full max-w-[205px] overflow-hidden rounded-b-[25px] rounded-t-[195px]">
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt={`Foto ${name}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                {/* Nama */}
                <p className="text-center font-jakarta text-[18px] font-bold leading-snug text-white sm:text-[20px] lg:text-[24px]">
                  {name}
                </p>
                {/* Fakultas */}
                <p className="text-center font-jakarta text-[16px] leading-relaxed text-white sm:text-[18px] lg:text-[20px]">
                  {fakultas}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
