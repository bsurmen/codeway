import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyB3Ixe_ZZiVyoNrSryd-KeusWf_VGyPt9Q",
  authDomain: "livechat-334b0.firebaseapp.com",
  databaseURL: "https://livechat-334b0.firebaseio.com",
  projectId: "livechat-334b0",
  storageBucket: "livechat-334b0.appspot.com",
  messagingSenderId: "686433776354",
  appId: "1:686433776354:web:0ff3c7e5fd2d7d5dde24bb",
  measurementId: "G-RM8GKQV9WT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .mount("#app");
  }
});
