import {
  ArrowBack,
  Container,
  H1,
  H3,
  Loader,
  Search,
  SubunitKlasterHero,
  dataGerotan,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function Gerotan() {
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
        image="/gerotan/hero.jpg"
        title={
          <>
            Sub Unit Ketundan 1
            <br />
            Dusun Gerotan
          </>
        }
        description="Sub unit Ketundan 1 (Dusun Gerotan) pada KKN PPM UGM fokus pada pengembangan masyarakat melalui berbagai program pemberdayaan, pendidikan, dan infrastruktur lokal"
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1>Let’s See Our Sub Unit Gerotan!</H1>
          <H3>
            Berikut adalah program kerja yang telah dilaksanakan oleh sub unit
            Ketundan 1
          </H3>
          <Search items={dataGerotan} routeTo="sub-unit/gerotan" />
        </Container>
      </div>
    </>
  );
}
