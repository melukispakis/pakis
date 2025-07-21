export function Loader() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-primary">
        <div className="flex animate-pulse flex-col items-center gap-6">
          <img
            src="/logo-pakis.png"
            alt="Loading..."
            className="animate-spin-slow h-52 w-52"
          />
          <p className="text-gray-700 animate-pulse text-center text-lg font-semibold">
            Memuat Melukis Pakis...
          </p>
        </div>
      </div>
    </>
  );
}
