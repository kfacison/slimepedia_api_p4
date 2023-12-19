import './AllSlimePage.css';
import { Link } from "react-router-dom";

export default function AllSlimePage(){
    return (
        <div className='allSlime'>
        <h2>all slime page</h2>
        <p>words</p>
        <Link to='/slimes/new'>Add New Slime</Link>
        </div>
    );
}