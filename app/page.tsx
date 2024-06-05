
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main>
      <h1 className="text-4xl p-16">Portfolio V2.0 By: Chris Harley &copy; {currentYear}</h1>
    </main>
  );
}
