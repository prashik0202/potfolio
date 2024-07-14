import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/data";

const ProjectDetail = () => {
  const { id } = useParams();
  console.log(id);
  // const itemId = parseInt(id, 10);
  const item = projects.find((item) => item.id === id);
  console.log(item);

  return (
    <main className="px-5">
      <div className="min-h-screen py-20 md:py-0 w-full lg:flex items-center md:justify-center md:items-center">
        <div className="w-full md:w-1/2 md:px-5">
          <h1 className="text-4xl font-semibold decoration-accent mb-5">
            {item.name}
          </h1>
          <div className="flex flex-row flex-wrap gap-2 my-4 ">
            {item.technology.map((item) => (
              <div className="bg-green-100 p-2 rounded-md">
                <h1>{item.tname}</h1>
              </div>
            ))}
          </div>
          <h1 className="py-6 text-xl text-slate-600">{item.description}</h1>
        </div>
        <div className="px-2">
          <img src={item.image} alt="img" className="h-300 w-full" />
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
