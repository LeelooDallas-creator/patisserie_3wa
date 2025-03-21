import React, { useState } from 'react';
import { useGetPatisseriesQuery, useAddPatisserieMutation, useUpdatePatisserieMutation, useDeletePatisserieMutation } from '../services/patisseriesApi';

const Admin = () => {
  const { data: patisseries, isLoading } = useGetPatisseriesQuery();
  const [addPatisserie] = useAddPatisserieMutation();
  const [updatePatisserie] = useUpdatePatisserieMutation();
  const [deletePatisserie] = useDeletePatisserieMutation();
  const [showForm, setShowForm] = useState(false);
  const [newPatisserie, setNewPatisserie] = useState({ nom: '', quantite: 1, image: '' });

  if (isLoading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Administration</h1>
      <button onClick={() => setShowForm(true)}>Ajouter une pâtisserie</button>
      {showForm && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await addPatisserie(newPatisserie);
            setShowForm(false);
          }}
        >
          <input type="text" placeholder="Nom" value={newPatisserie.nom} onChange={(e) => setNewPatisserie({ ...newPatisserie, nom: e.target.value })} required />
          <input type="number" placeholder="Quantité" value={newPatisserie.quantite} onChange={(e) => setNewPatisserie({ ...newPatisserie, quantite: e.target.value })} required />
          <input type="text" placeholder="Image URL" value={newPatisserie.image} onChange={(e) => setNewPatisserie({ ...newPatisserie, image: e.target.value })} required />
          <button type="submit">Créer la pâtisserie</button>
          <button type="button" onClick={() => setShowForm(false)}>Annuler</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Quantités restantes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patisseries.map((patisserie) => (
            <tr key={patisserie.id}>
              <td><img src={patisserie.image} alt={patisserie.nom} width="100" /></td>
              <td>{patisserie.nom}</td>
              <td>{patisserie.quantite}</td>
              <td>
                <button onClick={() => deletePatisserie(patisserie.id)}>Supprimer</button>
                <button onClick={() => updatePatisserie({ id: patisserie.id, nom: patisserie.nom, quantite: patisserie.quantite + 1 })}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
