import {
  Container,
  H1,
  H3,
  SubunitKlasterHero,
  dataGerdu,
  ArrowBack,
  Search,
  Loader,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function Gerdu() {
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
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/gerdu/hero.jpg"
        title={
          <>
            Sub Unit Pogalan 2
            <br />
            Dusun Gerdu
          </>
        }
        description="Sub unit Pogalan 2 (Dusun Gerdu) pada KKN PPM UGM berfokus pada pengembangan masyarakat lokal melalui program pendidikan, kesehatan, dan pemberdayaan ekonomi dan wisata."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Sub Unit Gerdu!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja yang telah dilaksanakan oleh sub unit
            Pogalan 2
          </H3>

          <Search items={dataGerdu} routeTo="sub-unit/gerdu" />
        </Container>
      </div>
    </>
  );
}
