import React from 'react'
import { TeamProvider } from './TeamContext'
import PlayerForm from './PlayerForm'
import PlayerList from './PlayerList'

function App() {
  return (
    <TeamProvider>
      <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
        <h1>⚽ Team Roster</h1>
        <PlayerForm />
        <hr />
        <PlayerList />
      </div>
    </TeamProvider>
  )
}

export default App
