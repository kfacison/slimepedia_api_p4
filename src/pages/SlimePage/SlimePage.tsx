import './SlimePage.css';
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as slimeApi from '../../utilities/slime-api';
import * as Types from '../../../types/types';


export default function SlimePage(){
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

    return (
        <>
        <h2>{`${slimeInfo.name} slime page`}</h2>
        </>
    );
}