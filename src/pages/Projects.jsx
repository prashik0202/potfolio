import { projects } from "../data/data";
import { useNavigate, Link } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen  py-20 md:px-20 px-5 ">
      <div className="my-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center">
        {projects.map((item) => (
          <div
            className="card w-xl shadow-2xl  border border-secondary rounded-none"
            key={item.id}
          >
            <div className="card-body">
              <h2 className="card-title text-4xl">{item.name}</h2>
              <p className="text-l md:text-l mt-2 text-gray-500">
                {item.smalldesc}
              </p>
              <div className="card-actions justify-start mt-2">
                <Link to={`/projects/${item.id}`}>
                  <button className="btn btn-secondary btn-outline rounded-none">
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
