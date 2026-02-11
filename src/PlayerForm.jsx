import React, { useState } from 'react'
import { useTeam } from './TeamContext'

export default function PlayerForm() {
  const [name, setName] = useState("")
  const { dispatch } = useTeam() // Using our custom hook!

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    // Dispatch an action to add the player. 
    // The type should be 'ADD_PLAYER' and the payload should be 'name'.
    dispatch({ 
        type: 'ADD_PLAYER', 
        payload: name 
    })
    setName("") // Clears the input
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter player name..." 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  )
}