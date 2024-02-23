import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/data';

const ProjectDetail = () => {

  const { id } = useParams();
  console.log(id);
  // const itemId = parseInt(id, 10);
  const item = projects.find(item => item.id === id)
  console.log(item);


  return (
    <main>
      <div className=" hero min-h-screen">
        <div className="hero-content">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold decoration-accent mb-5">{item.name}</h1>
            <div className='flex flex-row space-x-2 my-4'>
              {
                item.technology.map((item) => (
                  <div className='bg-green-100 p-2 rounded-md'>
                    <h1>{item.tname}</h1>
                  </div>
                ))
              }
            </div>
            <img src={item.image} alt="img" className='border'/>
            <h1 className="py-6 text-l text-slate-600">{item.description}</h1>
        </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail