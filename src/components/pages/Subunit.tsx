import {
  Container,
  H1,
  H3,
  Loader,
  MainSubunitKlasterHero,
  SubunitKlasterCard,
  dataSubunit,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function Subunit() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cle
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
      <MainSubunitKlasterHero
        image="/hero.png"
        title="Sub Unit"
        description="Sub-Unit pada KKN PPM UGM adalah kelompok kecil mahasiswa yang bekerja sama dalam proyek pengabdian masyarakat untuk mencapai tujuan spesifik di lokasi KKN."
      />
      <div data-aos="fade-up">
        <div className="transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
          <Container className="pb-24 pt-[101px] font-jakarta">
            <H1 className="text-center text-xl font-bold md:text-3xl lg:text-4xl">
              Let’s See Our Sub-Unit!
            </H1>

            <H3 className="text-center text-base md:text-lg lg:text-xl pb-6">
              Berikut adalah Sub-Unit dari Melukis Pakis di Desa Kragilan dan
              Ketundan
            </H3>

            <div
              className="mt-4 grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
              data-aos="fade-up"
            >
              {dataSubunit.map(({ image, title, href, description }: any) => (
                <a href={`/sub-unit/${href}`} key={title} className="block">
                  <SubunitKlasterCard
                    image={image}
                    title={title}
                    description={description}
                  />
                </a>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
