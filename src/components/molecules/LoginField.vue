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
  </form>
</template>

 <script>
import "firebase/auth";
import { reactive, toRefs } from "vue";
import * as firebase from "firebase/app";
import TextField from "../atoms/TextField";

export default {
  name: "LoginField",
  components: {
    appText: TextField,
  },
  setup(props, { root }) {
    const login = reactive({ email: "", password: "", error: "" });

    async function pressed() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        root.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    }

    return { ...toRefs(login), pressed };
  },
};
</script>

<style lang="scss" scoped>
.radius {
  &--top {
    border-radius: 8px 8px 0 0;
    border-bottom: none;
  }
  &--center {
    border-radius: 0;
    border-bottom: none;
  }
  &--bottom {
    border-radius: 0 0 8px 8px;
  }
}
</style>
