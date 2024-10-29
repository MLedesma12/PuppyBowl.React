import { useState } from "react";
import { addPlayer } from "../api";
import { useNavigate } from "react-router-dom";

export const NewPlayerForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);
  // const [token, setToken] =
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await addPlayer({ name, breed });
      if (result.success) setError(null);
      navigate(`/`);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <p>New Player Form</p>

      <div id="new-player-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Breed
            <input
              type="text"
              name="breed"
              placeholder="Breed"
              required
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </label>
          <button type="submit">Add Player</button>
        </form>
      </div>
    </>
  );
};

export default NewPlayerForm;
