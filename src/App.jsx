import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import { removePlayer } from "./api";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <NewPlayerForm /> */}
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/addPlayer" element={<NewPlayerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
