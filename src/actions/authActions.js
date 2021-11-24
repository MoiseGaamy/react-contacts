export const createEmailAndPassword = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((user)=>{console.log(user);})
        .catch((err)=>{console.log(err);})
    }
}
export const logIn = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user)=>{console.log(`${user} successfully logged in`);})
        .catch((err)=>{console.log(err);})
    }
}
export const signInWithGoogle = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase()
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((user)=>{console.log(`${user} successfully singIn with google provider`);})
        .catch((err)=>{console.log(err);})
    }
}
export const logOut = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .signOut()
        .then((user)=>{console.log(`${user} successfully logOut`);})
        .catch((err)=>{console.log(err);})
    }
}