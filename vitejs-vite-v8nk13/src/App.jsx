import { useState } from 'react';
import './App.css';

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [disLikeCounter, setDisLikeCounter] = useState(0);

  function likeIncrement() {
    setLikeCounter(prevCount => prevCount + 1);
  }

  function disLikeIncrement() {
    setDisLikeCounter(prevCount => prevCount + 1);
  }

  const totalVotes = likeCounter + disLikeCounter;
  const likePercentage = totalVotes === 0 ? 0 : (likeCounter / totalVotes) * 100;

  return (
    <main>
      <p>Hello world</p>
      <div className='buttons-container'>
        <button onClick={likeIncrement}>❤️{likeCounter}</button>
        <button onClick={disLikeIncrement}>👎{disLikeCounter}</button>
      </div>
      <div
        className='percentage-bar'
        style={{ '--like-percentage': `${likePercentage}%` }}
      ></div>
    </main>
  );
}
