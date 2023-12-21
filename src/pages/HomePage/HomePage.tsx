import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return (
        <>
        <div className='HomePage'>
        <h2 className='aboutHeader'>Slimepedia API</h2>
        <p className='aboutBody'>Welcome to Slime Rnacher API</p>
        <p className='aboutBody'>For more info see the about page.</p>
        <Link to='/about' className='aboutLink'>Here</Link>
        </div>
        </>
    );
}