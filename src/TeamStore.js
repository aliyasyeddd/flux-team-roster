import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let _players = []; // Private data that stays inside this file

const TeamStore = Object.assign({}, EventEmitter.prototype, {
  getPlayers() {
    return _players;
  },
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

// THE WIRE: Connecting Dispatcher to Store
AppDispatcher.register((action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      _players = [..._players, { id: Date.now(), name: action.payload }];
      
      TeamStore.emitChange();
      break;

    case 'REMOVE_PLAYER':
      _players = _players.filter(p => p.id !== action.payload);
      TeamStore.emitChange();
      break;
  }
});

export default TeamStore;