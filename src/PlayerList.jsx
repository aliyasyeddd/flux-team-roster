import React, { useState, useEffect } from 'react';
import TeamStore from './TeamStore';
import AppDispatcher from './AppDispatcher';

export default function PlayerList() {
  const [players, setPlayers] = useState(TeamStore.getPlayers());

  useEffect(() => {
    const onChange = () => {
      // Re-pull data when the store shouts "change!"
      setPlayers([...TeamStore.getPlayers()]);
    };

    TeamStore.addChangeListener(onChange);
    return () => TeamStore.removeChangeListener(onChange);
  }, []);

  const handleDelete = (id) => {
    AppDispatcher.dispatch({
      type: 'REMOVE_PLAYER',
      payload: id
    });
  };

  return (
    <div>
      <h3>Team Roster ({players.length})</h3>
      {players.length === 0 && <p>No players yet.</p>}
      <ul>
        {players.map(player => (
          <li key={player.id} style={{ marginBottom: '10px' }}>
            {player.name} 
            <button 
              onClick={() => handleDelete(player.id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}