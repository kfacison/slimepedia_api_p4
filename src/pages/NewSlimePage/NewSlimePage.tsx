import './NewSlimePage.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as slimeApi from '../../utilities/slime-api';

export default function NewSlimePage(){
    const navigate = useNavigate();
    const allLocations: {placeName: string} []= [
        {placeName : 'Dry Reef'},
        {placeName:'Indigo Quarry',},
        {placeName:'Moss Blanket',},
        {placeName: 'Ancient Ruins',},
        {placeName: 'Glass Desert',},
        {placeName: 'other'}
    ]
    const [checkedState, setCheckedState] = useState(
        new Array(allLocations.length).fill(false)
    );
    const [formData, setFormData] = useState({
        name: '',
        plort: '',
        behavior: 'docile',
        diet: 'fruit',
        location: [''],
        favFood: '',
        favToy: '',
    });

    useEffect(() => {
        const newArry: string[] = [];
        checkedState.forEach((item: any, index: number) => { 
            if(item){
                newArry.push(allLocations[index].placeName)
            }
            })
        // console.log(newArry)
        const newFormData = { ...formData, location: newArry};
        setFormData(newFormData);
        // console.log(formData);
    },[checkedState, setCheckedState]);

    async function handleChange(evt: any) {
        if(evt.target.name === 'location'){
            // console.log(evt.target.value);
            const updatedCheckedState = checkedState.map((item: any, index: number) => {
                return index == evt.target.value ? !item : item;
            });
            // console.log(updatedCheckedState);
            setCheckedState(updatedCheckedState);
        }
        else{
            const newFormData = { ...formData, [evt.target.name]: evt.target.value };
            setFormData(newFormData);
        }
    }
    
    async function handleSubmit(evt: any) {
        evt.preventDefault();
        try {
            const NewSlimeData = formData;
            // console.log(NewSlimeData);
            const newSlime = await slimeApi.createSlime(NewSlimeData);
            // console.log(newSlime);
            return navigate("/slimes/" + newSlime._id);
        } catch (error) {
            console.error("Error during form submission", error);
        }
    }

    return (
        <>
        <div>
        <h2>New Slime Page</h2>
        <form autoComplete="off" onSubmit={handleSubmit}  className='slimeForm'>
        <div className='formName'>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                />
        </div>

        <div className='formPlort'>
            <label htmlFor="plort">Plort:</label>
            <input
                type="text"
                id="plort"
                name="plort"
                autoComplete="off"
                value={formData.plort}
                onChange={handleChange}
                />
        </div>

        <div className='formBehavior'>
            <label htmlFor="behavior">Behavior Type:</label>
            <select
                id="behavior"
                name="behavior"
                value={formData.behavior}
                onChange={handleChange}
                >
                <option value="docile">Docile</option>
                <option value="harmful">Harmful</option>
                <option value="special">Special</option>
                <option value="hostile">Hostile</option>
            </select>
        </div>

        <div className='formDiet'>
            <label htmlFor="diet">Diet Type:</label>
            <select
                id="diet"
                name="diet"
                value={formData.diet}
                onChange={handleChange}
                >
                <option value="fruit">Fruit</option>
                <option value="veggies">Veggies</option>
                <option value="meat">Meat</option>
                <option value="other">Other</option>
            </select>
        </div>

        <div className='formLocation'>
            <fieldset onChange={handleChange}>
                <legend>Location:</legend>
                    <input type="checkbox" name="location" value={0} />
                    <label htmlFor="dryReef">Dry Reef</label>
                
                    <input type="checkbox" name="location" value={1} />
                    <label htmlFor="indigoQuarry">Indigo Quarry</label>

                    <input type="checkbox" name="location" value={2} />
                    <label htmlFor="mossBlanket">Moss Blanket</label>
                
                    <input type="checkbox" name="location" value={3} />
                    <label htmlFor="ancientRuins">Ancient Ruins</label>
                
                    <input type="checkbox" name="location" value={4} />
                    <label htmlFor="glassDesert">Glass Desert</label>
                
                    <input type="checkbox" name="location" value={5} />
                    <label htmlFor="other">Other</label>
            </fieldset>
        </div>

        <div className='formFavFood'>
            <label htmlFor="favFood">Favorite Food:</label>
            <input
                type='text'
                id="favFood"
                name="favFood"
                value={formData.favFood}
                onChange={handleChange}
                />
        </div>

        <div className='formFavToy'>
            <label htmlFor="favToy">Favorite Toy:</label>
            <input
                type="text"
                id="favToy"
                name="favToy"
                autoComplete="off"
                value={formData.favToy}
                onChange={handleChange}
                />
        </div>

        <div>
            <button type="submit" className='formButton'>Add New Slime</button>
        </div>

        </form>
        </div>
        </>
    );
}