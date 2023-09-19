import { useState } from 'react';
import{AiOutlineMenu} from 'react-icons/ai'
import{RxCross2} from 'react-icons/rx'
const NavBar = () => {
    const[open,setOpen]= useState(false)
    const routes = [
        { id: 1, name: "Home Page", path: "/home" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact Us", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];

      
    return (
        <nav className='bg-yellow-500 p-6'>
           <div onClick={()=>setOpen(!open)}>
            {
                open? <RxCross2 className='text-2xl md:hidden'></RxCross2>:<AiOutlineMenu className='text-2xl md:hidden'></AiOutlineMenu>
            }
           
           </div>
           <ul className={`md:flex absolute duration-1000 md:static bg-yellow-400 p-2 
            ${open?"top-16" :"-top-60"}
           `}>
           {
            routes.map(route => <li className="mr-6 px-6 hover:bg-purple-500 rounded-md" key={route.id}><a href={route.path}>{route.name}</a></li>)
           }
           </ul>
        </nav>
    );
};

export default NavBar;