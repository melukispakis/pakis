import { H2 } from "@/components";

export function SubunitKlasterCard(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <div
        className="relative overflow-hidden rounded-[24px] bg-cover bg-center text-white shadow-md transition-transform duration-300 hover:scale-[1.03]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <H2 className="relative z-10 pb-10 pt-[200px] text-center font-alatsi text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </H2>
        <div className="relative z-10 px-6 pb-6 font-jakarta text-sm sm:text-base">
          <p className="font-semibold">{title}</p>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </>
  );
}
