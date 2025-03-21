import React from 'react';

const Patisseries = () => {
  // Liste de pâtisseries en dur
  const patisseries = [
    { id: 1, nom: "Éclair au chocolat" },
    { id: 2, nom: "Macaron framboise" },
    { id: 3, nom: "Tarte aux fraises" },
    { id: 4, nom: "Croissant aux amandes" }
  ];

  return (
    <div>
      <h1>Pâtisseries</h1>
      <ul>
        {patisseries.map((patisserie) => (
          <li key={patisserie.id}>{patisserie.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default Patisseries;
