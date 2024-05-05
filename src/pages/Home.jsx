import resume from "../assets/prashik_gamre_resume.pdf";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xxl">
            <h1 className="text-6xl md:text-8xl font-semibold">
              Prashik Gamre
            </h1>
            <h1 className="my-3 text-5xl decoration-secondary">
              FullStack Developer
            </h1>
            {/* <p className="text-sm text-slate-500 my-2">
              I am passionate about technology and its transformative potential.
              <br />
              Exploring innovative solutions, continuous learning in the
              ever-evolving world of IT
            </p> */}
            <button className="btn btn-secondary btn-outline hover:bg-secondary my-1 rounded-none">
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
