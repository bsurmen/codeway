<template>
  <form @submit.prevent="pressed">
    <app-text text="Please sign in" type="h4" />
    <input
      type="email"
      v-model="email"
      placeholder="E-mail address"
      className="radius--top"
    />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      className="radius--bottom"
    />
    <button type="submit">Sign in</button>
    <div class="error" v-if="error">{{ error.message }}</div>
    <div class="">{{}}</div>
  </form>
</template>

 <script>
import * as firebase from "firebase/app";
import "firebase/auth";
import TextField from "../atoms/TextField";

export default {
  name: "LoginField",
  components: {
    appText: TextField,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
