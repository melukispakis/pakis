/* eslint-disable @next/next/no-html-link-for-pages */
import { Container, H5, Text } from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 10 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Container className="rounded-t-[20px] border-t-2 border-primary bg-footer font-jakarta text-white">
        <div className="mb-[26.75px] mt-[70px] flex h-full w-full flex-col items-start justify-start gap-y-[32px] lg:flex-row lg:justify-between">
          <div
            className="flex flex-col items-start gap-y-[16px]"
            data-aos="fade-right"
          >
            <div className="flex flex-row justify-between gap-x-[12px]">
              <Image
                src="/logo-ugm.png"
                alt="image"
                height={1000}
                width={1000}
                className="w-[57px]"
              />
              <Image
                src="/logo-kkn.png"
                alt="image"
                height={1000}
                width={1000}
                className="w-[57px]"
              />
            </div>
            <div className="flex flex-row items-center gap-x-[10px]">
              <Image
                src="/logo-pakis.png"
                alt="image"
                height={1000}
                width={1000}
                className="w-[44px]"
              />
              <H5 className="font-jakarta">
                Melukis
                <br />
                Pakis
              </H5>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start gap-x-[100px] gap-y-[32px]">
            <div className="flex flex-col gap-y-[17px]" data-aos="fade-left">
              <Text size="lg" className="font-jakarta font-bold">
                Klaster
              </Text>
              <div className="flex flex-col gap-y-[5px]">
                <a href="/klaster/saintek">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Saintek
                  </Text>
                </a>
                <a href="/klaster/soshum">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Soshum
                  </Text>
                </a>
                <a href="/klaster/agro">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Agro
                  </Text>
                </a>
                <a href="/klaster/medika">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Medika
                  </Text>
                </a>
              </div>
            </div>
            <div
              className="flex flex-col gap-y-[17px]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Text size="lg" className="font-jakarta font-bold">
                Sub Unit
              </Text>
              <div className="flex flex-col gap-y-[5px]">
                <a href="/sub-unit/pucung">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Kragilan
                  </Text>
                </a>
                <a href="/sub-unit/gerdu">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Gerotan
                  </Text>
                </a>
                <a href="/sub-unit/semampiran">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Semimpen
                  </Text>
                </a>
                {/* <a href="/sub-unit/semimpen">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Ketundan 2
                  </Text>
                </a> */}
              </div>
            </div>
            <div
              className="flex flex-col gap-y-[17px]"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <Text size="lg" className="font-jakarta font-bold">
                Kontak Kami
              </Text>
              <div className="flex flex-row gap-x-[9.33px]">
                <a href="https://www.instagram.com/melukis.pakis/">
                  <Image
                    src="/sosmed/ig.svg"
                    alt="image"
                    height={1000}
                    width={1000}
                    className="w-[44px]"
                  />
                </a>
                <a href="mailto:melukispakis@gmail.com">
                  <Image
                    src="/sosmed/gmail.svg"
                    alt="image"
                    height={1000}
                    width={1000}
                    className="w-[44px]"
                  />
                </a>
                <a href="https://www.tiktok.com/@melukis_pakis">
                  <Image
                    src="/sosmed/tiktok.svg"
                    alt="image"
                    height={1000}
                    width={1000}
                    className="w-[44px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Text size="md" className="mb-[70px]">
          Copyright 2025 Melukis Pakis
        </Text>
      </Container>
    </>
  );
}
