<template>
  <div class="profile">
    <div class="profile__card">
      <app-text text="Email:" className="mail" />
      <app-text :text="email" className="mail" />
    </div>
  </div>
</template>

<script>
import TextField from "../atoms/TextField";
import { onMounted, ref } from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Profile",
  components: {
    appText: TextField,
  },
  setup() {
    const email = ref("");

    const getUserEmail = async () => {
      const user = await firebase.auth().currentUser;
      email.value = user.email;
    };

    onMounted(() => {
      getUserEmail();
    });

    return { email };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &__card {
    width: 100%;
    margin: 0 1em;
    padding: 1.5rem;
    background-color: $bunting;
    border-radius: 8px;
    display: flex;
  }
}

.mail {
  font-size: 0.7em;
  margin-right: 1em;
}
</style>
