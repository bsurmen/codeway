<template>
  <app-header v-if="loggedIn" />
  <router-view />
</template>

<script>
import "./styles/main.scss";
import Header from "./components/organisms/Header";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  components: {
    appHeader: Header,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
};
</script>