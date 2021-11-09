export const addContact = (contact) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts')
            .add(contact)
            .then(() => {
                dispatch({
                    type: "ADD_CONTACT",
                   payload: contact                           
                });
            });
    };
    // return {
    //     type: "ADD_CONTACT",
    //     payload: contact
    // };
};

export const deleteContact = (contactId) => {
    return {
        type: "DELETE_CONTACT",
        payload: contactId
    };
};

export const editContact = (updated) => {
    return {
        type: "EDIT_CONTACT",
        payload: updated
    };
};

export const getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts')
            .onSnapshot((query) => {
                const Contacts = [];
                query.forEach((doc) => {
                    Contacts.push(doc.data());
                });
                console.log(Contacts);
                dispatch({ type: "ALL_CONTACTS", payload: Contacts });
            });
    };
}