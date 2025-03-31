import resume from "../assets/Prashik_Gamre_Software_Engineer.pdf";

export default function Home() {
  return (
    <main className="min-h-dvh p-10 md:p-20 lg:p-32 flex flex-col items-center w-full">
      <div className="max-w-xxl flex flex-col gap-5 items-center">
        <h1 className="text-6xl md:text-8xl font-semibold text-center">
          Prashik Gamre
        </h1>
        <h1 className="text-3xl md:text-5xl decoration-secondary text-center">
          Full Stack Developer <br className="block md:hidden" /> AI/ML
          Enthusiast
        </h1>
        <button className="px-5 py-3 rounded-md bg-neutral-900 text-neutral-100 mt-10">
          <a href={resume} download>
            Download Resume
          </a>
        </button>
      </div>
    </main>
  );
}
