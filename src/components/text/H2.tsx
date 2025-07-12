export function H2(props: any) {
  const { className, children } = props;
  return (
    <p
      className={`text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[44.8px] lg:text-[36px] lg:leading-[43.2px] ${className}`}
    >
      {children}
    </p>
  );
}

export default H2;
