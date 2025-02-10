import { Container, H1, H3 } from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function MainSubunitKlasterHero(props: any) {
  const { image, title, description } = props;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        className="h-screen w-full text-white"
      >
        <Container>
          <div
            className="relative top-[40%] xs:top-[50%] lg:top-[40%]"
            data-aos="fade-right"
          >
            <H1 className="font-alatsi font-bold">{title}</H1>
            <H3 className="max-w-[661px] pb-[130px] pt-[40px] font-jakarta">
              {description}
            </H3>
          </div>
        </Container>
      </div>
    </>
  );
}
