import { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" border-2 border-blue-800 float-left text-5xl h-28 p-0 items-center w-28 -mr-1 -mt-1 cursor-pointer"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);


  const [status, setStatus] = useState('');
  

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];

    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;

    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  }

  function handleRestart(){
    setIsXTurn(true);
    setSquares(Array(9).fill(''));
  }

  console.log(squares);

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is draw! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`winnner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next Player is  ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe-container flex flex-col items-center mt-28">
      <h1 className="relative bottom-4 text-3xl font-bold text-orange-600">
        Play Tic-Tac-Toe
      </h1>

      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <h1 className="font-bold text-3xl mt-4">{status}</h1>

      <button className="mt-4 rounded-md font-bold text-2xl bg-blue-700 text-white px-3 py-2 hover:bg-blue-400 hover:text-black" onClick={handleRestart}>Restart</button>

    </div>
  );
}
