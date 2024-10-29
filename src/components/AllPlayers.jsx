import { fetchAllPlayers } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllPlayers() {
      const players = await fetchAllPlayers();
      console.log(players);
      setPlayers(players.data.players);
    }
    getAllPlayers();
  }, []);
  const filteredPlayers = searchTerm
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : players;
  return (
    <>
      <label>
        Search
        <input
          type="text"
          onChange={(e) => setsearchTerm(e.target.value)}
          value={searchTerm}
        />
      </label>

      <div>
        {filteredPlayers.map((player, i) => {
          return (
            <div key={i}>
              <h4>{player.name}</h4>
              <h4>{player.breed}</h4>
              <h4>{player.status}</h4>
              <img src={player.imageUrl} alt={player.name} />
              <button
                className="see-details"
                onClick={() => navigate(`/players/${player.id}`)}
              >
                See details
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllPlayers;
