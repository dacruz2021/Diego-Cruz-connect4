import { useState } from "react";
import "./styles.css";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  const [column, changeColumn] = useState([]);

  function dropSlotToColumn() {
    var newColumn = [...column, playerTurn];
    if (column.length < 6) {
      changeColumn(newColumn);
      togglePlayerTurn();
    }
  }

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }

  return (
    <div className="App">
      <div className="blue" onClick={dropSlotToColumn}>
        <div className={`slot ${column[5]}`}></div>
        <div className={`slot ${column[5]}`}></div>
        <div className={`slot ${column[5]}`}></div>
        <div className={`slot ${column[5]}`}></div>
        <div className={`slot ${column[5]}`}></div>
        <div className={`slot ${playerTurn}`}></div>
      </div>
      It is {playerTurn}'s turn
    </div>
  );
}
