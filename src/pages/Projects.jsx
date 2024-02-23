import { projects } from '../data/data';
import { useNavigate, Link } from 'react-router-dom';

export default function Projects() {

  const navigate = useNavigate();

  return (
    <main className='min-h-screen  py-20 md:px-20 px-5 '>
      <div className='my-10 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center'> 
        {
          projects.map((item) => (
            <div className="card w-xl bg-slate-100 shadow-2xl border border-primary rounded-none" key={item.id}>
              <div className="card-body">
                <h2 className="card-title text-3xl">{item.name}</h2>
                <p className="text-l mt-2">
                  {item.description}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/projects/${item.id}`}>
                    <button 
                      className="btn btn-accent btn-outline"
                      // onClick={()=>document.getElementById('my_modal_3').showModal()}
                    >
                      Open Project
                    </button>
                  </Link>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      <h3 className="font-bold text-lg">Opps, Sorry!</h3>
                      <p className="py-4">This Page is Under Development</p>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
    </main>
  )
}