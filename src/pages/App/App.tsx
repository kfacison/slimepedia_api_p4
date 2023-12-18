import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import HomePage from '../HomePage/HomePage';
import AllSlimePage from '../AllSlimePage/AllSlimePage';
import SlimePage from '../SlimePage/SlimePage';
import NewSlimePage from '../NewSlimePage/NewSlimePage';
import AllFoodPage from '../AllFoodPage/AllFoodPage';
import FoodPage from '../FoodPage/FoodPage';
import NewFoodPage from '../NewFoodPage/NewFoodPage';
import AboutPage from '../AboutPage/AboutPage';


export default function App() {
  return (
    <div>
      <nav>
      <NavBar />
      </nav>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/slimes" element={<AllSlimePage/>}/>
        <Route path="/slimes/:id" element={<SlimePage/>}/>
        <Route path="/slimes/new" element={<NewSlimePage/>}/>
        <Route path="/foods" element={<AllFoodPage/>}/>
        <Route path="/foods/:id" element={<FoodPage/>}/>
        <Route path="/foods/new" element={<NewFoodPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>

    </main>
    </div>
  );
}
