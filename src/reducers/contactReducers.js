const initialState = {
    contacts: []
}

const usersReducers = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
              ...state, contacts:[...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            const deletedContat = state.contacts.filter((contact) => {
                return contact.id !== action.payload;
            })
            return { ...state, contacts: deletedContat };
        case 'EDIT_CONTACT':
            const editedContact = state.contacts.map((contact) => {
                return contact.id === action.payload.id ? action.payload : contact
            })
            return { ...state, contacts: editedContact };
        case 'ALL_CONTACTS':
            return { ...state, contacts: action.payload };
        default:
            return state; 
      }
    
}

export default usersReducers;