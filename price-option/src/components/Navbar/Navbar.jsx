import { useState } from "react";
import Link from "../Link/Link";
import { BiMenuAltRight,BiHardHat} from 'react-icons/bi';

const Navbar = () => {

    const [open,setOpen]=useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      


    return (
        <nav className="text-black bg-yellow-400 p-6">
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open==true ?<BiHardHat></BiHardHat>: <BiMenuAltRight ></BiMenuAltRight>
                }
           

            </div>
            
            <ul className={`md:flex duration-150 bg-yellow-400 px-6  absolute md:static
            ${open ?'top-16':'-top-60'}
           `}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
            
        </nav>
    );
};

export default Navbar;