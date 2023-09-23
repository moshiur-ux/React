import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2 className="text-7xl mb-4">
            Welcome to my website
            </h2>
            <nav className="mb-4">
                <Link className="ml-2 btn" to="/">Home</Link>
                <Link className="ml-2 btn" to="/about">About</Link>
                <Link className="ml-2 btn" to="/contact">Contact</Link>
                <Link className="ml-2 btn" to="/users">Users</Link>
                <Link to="/posts" className="ml-2 btn">Posts</Link>

            </nav>
            
        </div>
    );
};

export default Header;