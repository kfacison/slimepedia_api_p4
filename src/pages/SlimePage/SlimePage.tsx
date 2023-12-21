import './SlimePage.css';
import { Link,useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as slimeApi from '../../utilities/slime-api';
import * as Types from '../../../types/types';


export default function SlimePage(){
    const navigate = useNavigate();
    let { id } = useParams();
    const [slimeInfo, setSlimeInfo] = useState<Types.Slime>({
        name: "",
        plort:  "",
        behavior:  "",
        diet: "",
        location: [],
        favFood:  "",
        favToy: "",

    });

    useEffect(() => {
        async function GetSlimeInfo() {
            try{
                const slimeInfo = await slimeApi.getSlime(id);
                setSlimeInfo(slimeInfo);
                
            }catch(error){
                console.error('Error getting slime info:', error);
            }
        }
        GetSlimeInfo();
        },[]);

        async function handleDelete() {
            if (window.confirm("Are you sure you want to delete this?")) {
              // delete it!
                // console.log('it was clicked')
                const d = await slimeApi.deleteSlime(id);
                navigate("/slimes");
            } else {
              // Do nothing!
            }
        }

    return (
        <>
        <div className='SlimeInfo'>
        <h2 className='SlimeInfoMainHeader'>{`${slimeInfo.name} Slime`}</h2>

        <p className='SlimeInfoBody'>
        <span className='SlimeInfoHeader'>Plort</span><br/>
            {`${slimeInfo.plort} plort`}
        </p>

        <p className='SlimeInfoBody'>
        <span className='SlimeInfoHeader'>Behavior</span><br/>
            {`${slimeInfo.behavior}`}
        </p>

        <p className='SlimeInfoBody'>
        <span className='SlimeInfoHeader'>Diet</span><br/>
            {`${slimeInfo.diet}`}
        </p>

        <p className='SlimeInfoBody'>
        <span className='SlimeInfoHeader'>Location</span><br/>
            {`${slimeInfo.location}`}
        </p>

        <p className='SlimeInfoBody'>
        <span className='SlimeInfoHeader'>Favorite Food</span><br/>
            {`${slimeInfo.favFood?slimeInfo.favFood : "None"}`}
        </p>

        <p className='SlimeInfoBody'>
        <span className='SlimeInfoHeader'>Favorite Toy</span><br/>
            {`${slimeInfo.favToy}`}
        </p>

        <Link to={"/slimes/"+id+"/edit"} className='EditLink'>Edit Slime</Link>

        <button className="deleteSlimeButton" onClick={handleDelete}>
            Delete Profile
        </button>
        </div>
        </>
    );
}