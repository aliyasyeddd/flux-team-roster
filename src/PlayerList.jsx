import React from 'react'
import { useTeam } from './TeamContext'

export default function PlayerList() {
  // 1. Pull state and dispatch from our hook
  const { state, dispatch } = useTeam()

  return (
    <div>
      <h3>Current Roster</h3>
      {state.players.length === 0 ? (
        <p>No players added yet. Sign someone!</p>
      ) : (
        <div>
        <ul>
          {state.players.map(player => (
            <li key={player.id} style={{ marginBottom: '10px' }}>
              {player.name} 
              <button 
                onClick={() => dispatch({ type: 'REMOVE_PLAYER', payload: player.id })}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch({ type: 'CLEAR_ROSTER' })} style={{ marginTop: '10px', color: 'blue' }}>
          Clear Roster
        </button>
        </div>
      )}
    </div>
  )
}