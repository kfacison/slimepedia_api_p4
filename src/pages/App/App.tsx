import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from '../HomePage/HomePage';

export default function App() {
  return (
    <div>
      <nav>
      <NavBar />
      </nav>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

    </main>
    </div>
  );
}
