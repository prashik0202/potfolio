import resume from '../assets/prashik_gamre_resume.pdf';

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-7xl font-bold decoration-accent">Prashik Gamre</h1>
            <h1 className="py-6 text-5xl decoration-secondary">FullStack Developer</h1>
            <p className="text-sm text-slate-800">I am undergraduate I.T student in Mumbai University.<br />
              I am passionate about technology and its transformative potential.<br />
              Exploring innovative solutions, continuous learning in the ever-evolving world of IT.
            </p>
            <button 
              className="btn btn-accent btn-outline hover:bg-secondary my-5"
            >
              <a href={resume} download>
                Download Resume
              </a>
            </button>
        </div>
        </div>
      </div>
    </main>
  )
}
