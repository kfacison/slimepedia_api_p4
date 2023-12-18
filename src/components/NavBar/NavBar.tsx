import { Link } from "react-router-dom";
import './NavBar.css';


export default function NavBar(){
    return (
        <div>
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/slimes" className="nav-links">Slimes</Link>
            <Link to="/foods" className="nav-links">Foods</Link>
            <Link to="/about" className="nav-links">About</Link>
        </div>
    );
}