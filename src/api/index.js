const cohortName = "2407-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/${playerId}`);
    const result = await response.json();
    console.log(result); // Process or display player details as needed
    return result.data.player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

export const addPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error("Oop! Something went wrong!");
  }
};
