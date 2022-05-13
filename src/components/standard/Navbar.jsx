
import { NavLink } from "react-router-dom";

import {HomeIcon, ShoppingCartIcon, AcademicCapIcon} from '@heroicons/react/solid';

import bgImg from '../../assets/logo192.png'

function Navbar() {

  return (
    <div className=" w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className=" md:px-4 px-2 w-full h-full">
        <div className=" md:flex justify-between md:pr-4 items-center hidden sm:block">
          <h1 className=" text-3xl font-bold mr-4 teal sm:text-4xl ">
            Macro<span className="info">Infos</span>{" "}
          </h1>

          <ul className="md:flex hidden  sm:block">
            <li>
              <NavLink exact to="/"  className="flex items-center" activeClassName="active-link"><HomeIcon className="h-8 w-8 teal mr-2 " /> Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/boutique"   activeClassName="active-link" className="flex items-center"><ShoppingCartIcon className="h-8 w-8 teal mr-2" /> Boutique</NavLink>
            </li>
            <li>
              <NavLink to="/formations"   activeClassName="active-link" className="flex items-center"><AcademicCapIcon className="h-8 w-8 teal mr-2" />Formation</NavLink>
            </li>
          </ul>
        </div>

        <div className=" flex justify-between items-center md:hidden">
        <img src={bgImg} alt="/" className="w-2/12" />
          <ul className="flex">
            <li>
              <NavLink exact to="/"   activeClassName="active-link" className="flex items-center"><HomeIcon className="h-8 w-8 teal" /></NavLink>
            </li>
            <li>
              <NavLink to="/boutique"  activeClassName="active-link"   className="flex items-center"><ShoppingCartIcon className="h-8 w-8 teal" /></NavLink>
            </li>
            <li>
              <NavLink to="/formations"  activeClassName="active-link" className="flex items-center"><AcademicCapIcon className="h-8 w-8 teal" /></NavLink>
            </li>
          </ul>
        </div>


      </div>

    </div>
  );
}

export default Navbar;
