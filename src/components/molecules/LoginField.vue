<template>
  <form @submit.prevent="signIn">
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
      autocomplete="false"
    />
    <button type="submit">Sign in</button>
    <app-text class="error" v-if="error" :text="error" />
  </form>
</template>

 <script>
import "firebase/auth";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import * as firebase from "firebase/app";
import TextField from "../atoms/TextField";

export default {
  name: "LoginField",
  components: {
    appText: TextField,
  },
  setup() {
    const login = reactive({ email: "", password: "", error: undefined });
    const router = useRouter();

    async function signIn() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        router.replace({ name: "Home" });
      } catch (err) {
        login.error = err.message;
      }
    }

    return { ...toRefs(login), signIn };
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

.error {
  color: $punch;
  font-size: 0.5em;
}
</style>
