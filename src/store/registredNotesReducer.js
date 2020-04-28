const ADD_NOTE = 'ADD_NOTE';

export const addNote = noteData => ({
  type: ADD_NOTE,
  noteData,
});

export const notesSelector = state => state.registeredNotes.notes;

const initialState = {
  notes: [
    {
      id: 0,
      fio: 'Иванов Иван Иванович',
      entity: 'частное предприятие "Иван"',
      registerDate: `${(new Date()).toLocaleString()}`,
      temperature: '36.6',

    },
    {
      id: 1,
      fio: 'Петров Петр Петрович',
      entity: 'частное предприятие "Петр"',
      registerDate: `${(new Date()).toLocaleString()}`,
      temperature: '38',

    },
    {
      id: 2,
      fio: 'Дмитриев Дмитрий Дмитриевич',
      entity: 'частное предприятие "Дмитрий"',
      registerDate: `${(new Date()).toLocaleString()}`,
      temperature: '40.1',
    },
  ],
};

const registeredNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.noteData],
      };
    }

    default: return state;
  }
};

export default registeredNotesReducer;
