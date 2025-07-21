import {
  Container,
  MainHero,
  H1,
  H5,
  P,
  dataBeranda,
  dataMahasiswa,
  Counter,
  H3,
} from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Loader } from "../template/Loader";

export function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return (
      <>
        <div className="block">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <>
      <MainHero
        image="/foto-pakis.png"
        title={
          <h1 className="text-center text-[24px] font-bold leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[44.8px] lg:text-[36px] lg:leading-[48px]">
            Tim KKN Melukis Pakis 2025
          </h1>
        }
        description={
          <p className="text-justify text-base leading-relaxed md:text-left lg:text-center">
            Kecamatan Pakis terletak di Kabupaten Magelang, Jawa Tengah,
            Indonesia. Kecamatan ini dikenal dengan keindahan alamnya, yang
            mencakup area pegunungan dan lahan pertanian yang subur. Pakis
            memiliki berbagai potensi wisata alam dan budaya, termasuk situs
            bersejarah dan pemandangan alam yang menarik. Sebagai salah satu
            daerah pedesaan, Pakis juga berfokus pada pertanian, dengan tanaman
            utama seperti padi dan sayuran. Kecamatan ini berperan penting dalam
            mendukung ekonomi lokal melalui kegiatan pertanian dan pariwisata.
            Pakis merupakan bagian dari Magelang yang kaya akan budaya dan
            tradisi lokal.
          </p>
        }
      />

      {/* Tentang Pakis */}
      <Container>
        <div
          className="relative my-[50px] h-full rounded-[54px]"
          data-aos="zoom-in"
        >
          <h1 className="text-center text-[24px] font-bold leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[44.8px] lg:text-[36px] lg:leading-[48px]">
            Demografi Kecamatan Pakis
          </h1>
          <div className="relative mx-[100px] flex flex-col items-center justify-between gap-x-[24px] gap-y-[40px] py-[65px] lg:flex-row">
            <div className="noselect container h-full min-w-[250px]">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                  <Image
                    src="/peta-pakis.png"
                    width={1000}
                    height={1000}
                    alt="Peta pakis"
                    className="h-full min-w-[250px] lg:max-w-[400px] xl:max-w-[615px]"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  />
                </div>
              </div>
            </div>
            <div className="cardsInfo flex flex-col items-center gap-y-[36px]">
              {dataBeranda.map(({ text, image, end }, i) => {
                return (
                  <>
                    <div
                      className="cardInfo flex w-full flex-row items-center gap-x-[9px] rounded-[16px] bg-cream px-[20px] py-[33px] lg:px-[35px]"
                      key={i}
                      data-aos="fade-left"
                    >
                      <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="Peta pakis"
                        className="h-fit max-w-[51px]"
                      />
                      <div className="flex flex-col items-start font-jakarta text-white">
                        <H5>{text}</H5>
                        <Counter end={end} duration={2000} />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div
          className="cardDeveloper relative my-12 w-full overflow-hidden rounded-[36px] bg-cream px-6 py-10 sm:px-10 md:px-14 lg:px-[100px] lg:py-[65px]"
          data-aos="zoom-in"
        >
          <div className="cardDeveloper-info relative flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-stretch lg:gap-[70px]">
            {/* Gambar */}
            <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-b-[25px] rounded-t-[195px] sm:max-w-[280px] md:max-w-[300px]">
              <Image
                src="/bu-budi.png"
                width={1000}
                height={1000}
                alt="Bu Budi"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Info Teks */}
            <div
              className="flex flex-col gap-4 self-center text-center lg:text-left"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <p className="font-jakarta text-[20px] font-bold leading-snug text-white sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]">
                Budi Rodestawati, S.Kp.G, MPH
              </p>
              <p className="font-jakarta text-[16px] leading-relaxed text-white sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[30px]">
                Dosen Pembimbing Lapangan Tim Melukis Pakis 2025
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Meet Our Teams */}
      <Container className="my-[50px] font-jakarta">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Meet Our Teams
          </div>

          <a
            href="/all-teams"
            className="text-blue-600 flex items-center text-xs font-bold hover:underline sm:text-lg md:text-xl"
          >
            See All Teams
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 23 24"
              fill="none"
            >
              <path
                d="M7.90625 4.5L15.0937 12L7.90625 19.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="my-12 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {dataMahasiswa.map(({ name, image, fakultas }, index) => (
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
                    alt="Foto Mahasiswa"
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
      </Container>
    </>
  );
}
