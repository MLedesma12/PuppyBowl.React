import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">To Home</Link>
      <Link to="/addPlayer">Add Player</Link>
    </>
  );
};

export default NavBar;
