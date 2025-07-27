type H1Props = {
  className?: string;
  children: React.ReactNode;
};

export function H1({ className = "", children }: H1Props) {
  return (
    <h1
      className={`text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[76.8px] ${className} font-bold`}
    >
      {children}
    </h1>
  );
}
