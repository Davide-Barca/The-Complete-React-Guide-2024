import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let playerNameContainer = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameContainer = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  function handleEditClick() {
    setIsEditing((curValue) => !curValue);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value)
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameContainer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
