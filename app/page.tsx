
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main>
      <h1 className="text-base font-thin px-4 py-8 tracking-wide md:text-2xl lg:text-4xl">portfolio V2.0 by: chrisharley.io &copy; {currentYear}</h1>
    </main>
  );
}
