import firebase from "firebase/app";

export default function() {
  const firebaseConfig = {
    apiKey: "AIzaSyCppGfF5mnwnZgAFfpf6xJlRMzfVeItXzI",
    authDomain: "dummy-frontend-project.firebaseapp.com",
    databaseURL: "https://dummy-frontend-project.firebaseio.com",
    projectId: "dummy-frontend-project",
    storageBucket: "dummy-frontend-project.appspot.com",
    messagingSenderId: "909596530093",
    appId: "1:909596530093:web:427d61d903a65e4141fd24",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const getUserToken = async () => {
  return await firebase.auth().currentUser.getIdToken();
};
