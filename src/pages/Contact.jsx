import { contact } from "../data/data";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center w-full p-10 md:p-20 lg:p-32">
      <div className="flex flex-col items-center justify-center xl:flex-row gap-5 w-full">
        {contact.map((item) => (
          <Link to={item.link} target="_blank" key={item.id} className="hover:shadow-2xl w-full">
            <div className="w-full h-[350px] shadow-2xl flex flex-col items-center justify-center">
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
