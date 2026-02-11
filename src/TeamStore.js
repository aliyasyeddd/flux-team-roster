import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

//Only the store methods can read or modify it.
let _players = []; // Private data that stays inside this file


//3️⃣ Creating the Store
//This creates an object that:
//Inherits from EventEmitter
//Has custom methods like getPlayers, emitChange, etc.
//Why EventEmitter?
//Because the store needs to:
//Notify React components when data changes.
const TeamStore = Object.assign({}, EventEmitter.prototype, {
    //Returns the current list of players.
    //React components call this to get data.
  getPlayers() {
    return _players;
  },

  //Emits a "change" event.
  //Tells React components:
  //"Hey! Data changed. Re-render!"
  emitChange() {
    this.emit('change');
  },

  //React components use this to subscribe.
  //When store updates → callback runs.
  addChangeListener(callback) {
    this.on('change', callback);
  },

  //Used when component unmounts.
  //Prevents memory leaks.
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

// THE WIRE: Connecting Dispatcher to Store
//This connects the Store to the Dispatcher.
//Whenever an action is dispatched, this function runs.
AppDispatcher.register((action) => {
  switch (action.type) {
    //What happens?
    //A new player object is created
    //Added to _players
    //emitChange() is called → UI updates
    case 'ADD_PLAYER':
        //Why Use Spread Operator?
        //Because:
        // It creates a new array
        // Avoids mutation
       // Makes state updates predictable
      // This is important in state management.
      _players = [..._players, { id: Date.now(), name: action.payload }];
      
      TeamStore.emitChange();
      break;


      //What happens?
      //Filters out the player with matching id
      //Updates _players
      //Notifies components
    case 'REMOVE_PLAYER':
      _players = _players.filter(p => p.id !== action.payload);
      TeamStore.emitChange();
      break;
  }
});

//Flow:
//User clicks → Action dispatched → Store updates → emitChange → React re-renders

export default TeamStore;