import { projects } from "../data/data";
import { useNavigate, Link } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh  py-20 md:px-20 px-5 ">
      <div className="my-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
        {projects.map((item) => (
          <div
            className="w-full shadow-2xl rounded-none border-l-8 border-neutral-900 "
            key={item.id}
          >
            <div className="p-10">
              <h2 className="card-title text-4xl">{item.name}</h2>
              <p className="text-lg md:text-lg mt-2 text-gray-500">
                {item.smalldesc}
              </p>
              <div className="card-actions justify-start mt-2">
                <Link to={`/projects/${item.id}`}>
                  <button className="bg-neutral-900 px-5 py-2 text-neutral-200 rounded-md">
                    Open Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
