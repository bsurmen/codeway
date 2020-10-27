<template>
  <div class="sign">
    <div class="logo">
      <app-image :src="appLogo" />
    </div>
    <div class="login">
      <app-login />
    </div>
    <app-text text="Hedwig &copy; 2020" className="copyright" />
  </div>
</template>

<script>
import { ref } from "vue";
import Logo from "../../assets/images/hedwig-icon.png";

import Image from "../atoms/Image";
import TextField from "../atoms/TextField";
import LoginField from "../molecules/LoginField";

export default {
  name: "SignIn",
  components: {
    appImage: Image,
    appLogin: LoginField,
    appText: TextField,
  },
  setup() {
    const appLogo = ref(Logo);
    return { appLogo };
  },
};
</script>

<style lang="scss" scoped>
.sign {
  width: 100%;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: calc(15rem + 2vw);
}

.login {
  width: calc(20rem + 2vw);
}

.copyright {
  color: $spun-pearl;
  font-size: 0.6em;
  margin-top: 3em;
}
</style>
