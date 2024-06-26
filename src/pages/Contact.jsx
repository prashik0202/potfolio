import { contact } from "../data/data";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="hero min-h-screen">
      <div className="flex flex-col items-center justify-center xl:flex-row space-x-0 space-y-0 xl:space-x-2">
        {contact.map((item) => (
          <Link to={item.link} target="_blank" key={item.id}>
            <div className="w-80 h-40 sm:h-80 shadow-2xl flex flex-col items-center justify-center">
              <div>
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="text-center">
                <h1 className="text-sm my-">{item.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Contact;
