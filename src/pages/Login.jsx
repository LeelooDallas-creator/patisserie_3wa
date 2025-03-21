import React, { useState } from 'react';
import { useLoginMutation, useGetMeQuery } from '../services/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const { data: user } = useGetMeQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  if (user) {
    return <div>Bienvenue {user.name} !</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
