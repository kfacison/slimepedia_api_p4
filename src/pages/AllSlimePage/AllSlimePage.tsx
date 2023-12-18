import './AllSlimePage';
import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <div className='allSlime'>
        <h2>all slime page</h2>
        <p>words</p>
        <Link to='/slimes/new'>Add New Slime</Link>
        </div>
    );
}