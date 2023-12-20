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
                console.log('it was clicked')
                const d = await slimeApi.deleteSlime(id);
                navigate("/slimes");
            } else {
              // Do nothing!
            }
        }

    return (
        <>
        <div className='SlimeInfo'>
        <h2>{`${slimeInfo.name} slime page`}</h2>

        <h3 className='SlimeInfoHeader'>Plort</h3>
        <p className='SlimeInfoBody'>{`${slimeInfo.plort} plort`}</p>

        <h3 className='SlimeInfoHeader'>behavior</h3>
        <p className='SlimeInfoBody'>{`${slimeInfo.behavior}`}</p>

        <h3 className='SlimeInfoHeader'>diet</h3>
        <p className='SlimeInfoBody'>{`${slimeInfo.diet}`}</p>

        <h3 className='SlimeInfoHeader'>location</h3>
        <p className='SlimeInfoBody'>{`${slimeInfo.location}`}</p>

        <h3 className='SlimeInfoHeader'>favFood</h3>
        <p className='SlimeInfoBody'>{`${slimeInfo.favFood?slimeInfo.favFood : "None"}`}</p>

        <h3 className='SlimeInfoHeader'>favToy</h3>
        <p className='SlimeInfoBody'>{`${slimeInfo.favToy}`}</p>

        <Link to={"/slimes/"+id+"/edit"}>Edit Slime</Link>

        <button className="deleteSlimeButton" onClick={handleDelete}>
            Delete Profile
        </button>
        </div>
        </>
    );
}