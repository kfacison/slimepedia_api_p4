import { Link } from "react-router-dom";
import './NavBar.css';


export default function NavBar(){
    return (
        <div>
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/Slimes" className="nav-links">Slimes</Link>
            <Link to="/Foods" className="nav-links">Foods</Link>
        </div>
    );
}