export const addContact = (contact) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts')
            .add({ ...contact, timestamp: getFirestore().Timestamp.fromDate(new Date()) })
            .then(() => {
                // dispatch({
                //     type: "ADD_CONTACT",
                //    payload: contact                           
                // });
            });
    };
    // return {
    //     type: "ADD_CONTACT",
    //     payload: contact
    // };
};

export const deleteContact = (contactId) => {

    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts').doc(contactId)
            .delete()
            .then(() => {
                //error handlers
            });
    };
    // return {
    //     type: "DELETE_CONTACT",
    //     payload: contactId
    // };
};

export const editContact = (contactId, updated) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts')
            .doc(contactId)
            .update(updated)
            .then(() => { });
    };
    // return {
    //     type: "EDIT_CONTACT",
    //     payload: updated
    // };
};

export const getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts')
            .orderBy('name', 'asc')
            .onSnapshot((query) => {
                const Contacts = [];
                query.forEach((doc) => {
                    Contacts.push({ ...doc.data(), id: doc.id });
                });
                console.log(Contacts);
                dispatch({ type: "ALL_CONTACTS", payload: Contacts });
            });
    };
}