import resume from "../assets/PrashikGamre_Full_Stack_Developer_Resume.pdf";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xxl">
            <h1 className="text-6xl md:text-8xl font-semibold">
              Prashik Gamre
            </h1>
            <h1 className="my-10 text-3xl md:text-5xl decoration-secondary">
              Full Stack Developer <br className="block md:hidden" /> AI/ML
              Enthusiast
            </h1>
            <button className="btn btn-secondary btn-outline hover:bg-secondary my-2 rounded-none">
              <a href={resume} download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
