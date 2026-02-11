import React, { useState } from 'react';
import AppDispatcher from './AppDispatcher';

export default function PlayerForm() {
  const [name, setName] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("1. Form sending action..."); 
  // 2. Dispatch an action to the Dispatcher with the new player's name as payload
  AppDispatcher.dispatch({
    type: 'ADD_PLAYER',
    payload: name
  });
  setName("");
};

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add Player</button>
    </form>
  );
}