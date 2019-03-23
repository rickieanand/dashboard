import firebase from 'firebase'
// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };
const config = {
    apiKey: "AIzaSyADjMpuiTXj85Qkwl7m2G7EvNehCqxgSX4",
    authDomain: "todo-ac2d8.firebaseapp.com",
    databaseURL: "https://todo-ac2d8.firebaseio.com",
    projectId: "todo-ac2d8",
    storageBucket: "todo-ac2d8.appspot.com",
    messagingSenderId: "854640657476"
}
const fire = firebase.initializeApp(config)
export default fire
