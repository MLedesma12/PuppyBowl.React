import { fetchSinglePlayer, removePlayer } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

const SinglePlayer = () => {
  let { id } = useParams();
  const [player, setPlayer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getSinglePlayer() {
      const players = await fetchSinglePlayer(id);
      console.log(players);
      setPlayer(players);
    }
    getSinglePlayer();
  }, []);

  async function handleDelete(playerId) {
    try {
      const response = await removePlayer(playerId);
      if (response.success) navigate(`/`);
    } catch (error) {}
  }
  return (
    <div>
      <div>
        <h4>{player.name}</h4>
        <h4>{player.breed}</h4>
        <h4>{player.status}</h4>
        <img src={player.imageUrl} alt={player.name} />
        <button className="see-details" onClick={() => navigate(`/`)}>
          Go Home
        </button>
        <button onClick={() => handleDelete(player.id)}>Delete</button>
      </div>
    </div>
  );
};

export default SinglePlayer;
