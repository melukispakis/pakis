import {
  ArrowBack,
  Container,
  H1,
  H3,
  Loader,
  Search,
  SubunitKlasterHero,
  dataKragilan,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function Kragilan() {
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
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/kragilan/hero.jpg"
        title={
          <>
            Sub Unit Kragilan
            <br />
            Dusun Kragilan
          </>
        }
        description="Sub unit Kragilan (Dusun Kragilan) pada KKN PPM UGM fokus pada pengembangan masyarakat lokal melalui program pemberdayaan ekonomi, pendidikan, dan kesehatan berbasis kebutuhan dusun."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1>Let’s See Our Sub Unit Kragilan!</H1>
          <H3>
            Berikut adalah program kerja yang telah dilaksanakan oleh sub unit
            Kragilan
          </H3>

          <Search items={dataKragilan} routeTo="sub-unit/kragilan" />
        </Container>
      </div>
    </>
  );
}
