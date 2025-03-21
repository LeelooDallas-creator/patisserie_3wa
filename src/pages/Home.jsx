import React from "react";
import { useGetPatisseriesQuery } from "../services/apiSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: patisseries, error, isLoading } = useGetPatisseriesQuery();
    console.log(error)
  if (isLoading) return <p>Chargement des pâtisseries...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <h1>Pâtisseries restantes à gagner</h1>
      <ul>
        {patisseries.map((patisserie) => (
          <li key={patisserie.id}>{patisserie.nom}</li>
        ))}
      </ul>
      <Link to="/play">
        <button>Lancer le jeu</button>
      </Link>
    </div>
  );
};

export default Home;
