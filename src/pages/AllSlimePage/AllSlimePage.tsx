import './AllSlimePage.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as slimeApi from '../../utilities/slime-api';

export default function AllSlimePage(){
    const navigate = useNavigate();

    interface allSlimesTypes{
        _id: any,
        name: any
    }

    const [allSlimes, setAllSlimes] = useState<allSlimesTypes[]>([]);

    useEffect(() => {
        async function GetAllSlime() {
            try{
                const AllSlimeInfo = await slimeApi.getAll();
                setAllSlimes(AllSlimeInfo);
                
            }catch(error){
                console.error('Error getting all slimes:', error);
            }
        }
        GetAllSlime();
        },[]);
        return (
        <>
        <div className='allSlime'>
        <h2>all slime page</h2>
        { allSlimes.map((slime, idx)=>(
        <Link to={'/slimes/'+slime._id} key={idx}>{slime.name + " slime"}</Link>))
        }
        </div>
        <Link to='/slimes/new'>Add New Slime</Link>
        </>
    );
}