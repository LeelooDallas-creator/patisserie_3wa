import React, { useState } from 'react';

const Play = () => {
  const [tries, setTries] = useState(3);
  const [dice, setDice] = useState([1, 1, 1, 1, 1]);
  const [result, setResult] = useState(null);

  const rollDice = () => {
    if (tries > 0) {
      const newDice = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
      setDice(newDice);
      setTries(tries - 1);
      checkWin(newDice);
    }
  };

  const checkWin = (dice) => {
    const counts = dice.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const values = Object.values(counts);
    if (values.includes(3)) {
      setResult('Bravo ! Vous avez gagné 1 pâtisserie !');
    } else if (values.includes(4) || values.includes(5)) {
      setResult('Félicitations ! Vous avez gagné 2 pâtisseries !');
    } else if (tries === 1) {
      setResult('Perdu ! Essayez encore.');
    }
  };

  return (
    <div>
      <h1>Jouez au Yams</h1>
      <p>Essais restants : {tries}</p>
      <div>
        {dice.map((num, index) => (
          <span key={index} style={{ margin: '5px', fontSize: '20px' }}>{num}</span>
        ))}
      </div>
      <button onClick={rollDice} disabled={tries === 0}>Lancer les dés</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Play;
