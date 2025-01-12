import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];


    return (
        <nav className="text-black p-6 bg-yellow-600">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose></IoClose> : <HiMenuAlt1></HiMenuAlt1>
                }

            </div>
            <ul className={`md:flex absolute md:static
            ${open ? 'top-16' : '-top-60'} bg-yellow-200 duration-1000`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;