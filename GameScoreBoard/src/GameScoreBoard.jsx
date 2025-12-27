import React from 'react';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function GameScoreBoard() {
    const [scores, setScores] = useState([
        {id:1, score: 50, player: 'Alice'},
        {id:2, score: 70, player: 'Bob'},
        {id:3, score: 40, player: 'Charlie'},
        {id:4, score: 90, player: 'Diana'}
    ]); // Example scores
    const increaseAmount = 10;
    const decreaseAmount = 5;

    function handleIncrease(id) {
        setScores(prevScores => 
            prevScores.map(player => 
                player.id === id ? {...player, score: player.score + increaseAmount} : player
            )
        );
    }

    function handleDecrease(id) {
        setScores(prevScores => 
            prevScores.map(player => 
                player.id === id ? {...player, score: player.score - decreaseAmount} : player //
            )
        );
    }

    function handleReset() {
        setScores(prevScores => 
            prevScores.map(player => ({...player, score: 0}))
        );
    }

    function handleWinner() {
        // use toSorted to avoid overwriting the original scores array
        const sortedScoresList = scores.toSorted((a, b) => b.score - a.score);
        const winner = sortedScoresList[0];
        const isTie = sortedScoresList.length > 1 && sortedScoresList[0].score === sortedScoresList[1].score;
        if (winner.score === 0) {
            return <div>No winner yet</div>;
        }
        if (isTie) {
            return <div>It's a tie!</div>;
        }
        return (
            <div>
                Player {winner.player} with {winner.score} points
            </div>
        );
    }
  return (
    <div className="game-score-board">
      <h2>Game Score Board</h2>
      <ul>
        {scores.map((player) => (
          <li key={player.id}>
            <Col className="align-items-center">
                Player {player.player}: {player.score} points
                <button onClick={() => handleIncrease(player.id)}>+{increaseAmount}</button>
                <button onClick={() => handleDecrease(player.id)}>-{decreaseAmount}</button>
            </Col>
          </li>
        ))}
      </ul>
      <h3>leaderboard Winner</h3>
      <div>
        {handleWinner()}
      </div>
      <button onClick={() => handleReset()}>reset</button>
    </div>
  );
}

export default GameScoreBoard;