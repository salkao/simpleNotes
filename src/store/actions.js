import types from './mutation-types';

export default {
  addNote({ commit }, note) {
    commit(types.ADD_NOTE, note);
  },
  removeAllNotes({ commit }) {
    commit(types.REMOVE_ALL_NOTES);
  },
  removeNote({ commit }, index) {
    commit(types.REMOVE_NOTE, index);
  },
  saveEdit({ commit }, index, newNote) {
    commit(types.SAVE_EDIT, index, newNote);
  },
  searchedNote({ commit }, newSearch) {
    commit(types.SEARCHED_NOTE, newSearch);
  },
};
