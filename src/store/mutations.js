import types from './mutation-types';

export default {
  [types.ADD_NOTE](state, note) {
    state.notes.push(note);
  },
  [types.REMOVE_ALL_NOTES](state) {
    // eslint-disable-next-line
    state.notes.length = 0;
    // eslint-disable-next-line
    state.notes = [];
  },
  [types.REMOVE_NOTE](state, index) {
    state.notes.splice(index, 1);
  },
  [types.SAVE_EDIT](state, index, newNote) {
    // eslint-disable-next-line
    state.notes[index] = newNote;
  },
};
