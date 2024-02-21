import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to = "/">Grad</Link>
            <Link to = "/main">Main</Link>
            <Link to = "/tracs">Tracs</Link>
        </div>
    );
}