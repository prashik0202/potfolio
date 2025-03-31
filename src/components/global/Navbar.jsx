import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full flex items-baseline justify-between p-4">
      <Link to='/' className="text-2xl ml-3">Prashik</Link>
      <div className="navbar-end flex md:mr-5">
        <Link to='/projects' className="mx-2 decoration-secondary text-xl cursor-pointer">Projects</Link>
        <Link to='/contact' className="mx-2 decoration-secondary text-xl cursor-pointer">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
