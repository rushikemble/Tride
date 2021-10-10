import firebase from "firebase/app";
import auth from "firebase/auth";

const app = firebase.initializeApp({});

export const auth = app.auth();
export default app;
