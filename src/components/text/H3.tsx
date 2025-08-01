export function H3(props: any) {
  const { className, children } = props;
  return (
    <p
      className={`text-[20px] leading-[32px] lg:text-[24px] lg:leading-[38.4px] ${className} mt-8 mb-8`}
    >
      {children}
    </p>
  );
}

export default H3;
