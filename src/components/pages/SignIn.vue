<template>
  <div class="sign">
    <div class="logo">
      <app-image :src="appLogo"/>
    </div>
    <div class="login">
      <app-login />
    </div>
    <app-text text="Hedwig &copy; 2020" className="copyright" />
  </div>
</template>

<script>
import Logo from "../../assets/images/hedwig-icon.png";

import Image from "../atoms/Image";
import TextField from "../atoms/TextField";
import LoginField from "../molecules/LoginField";

export default {
  name: "SignIn",
  data() {
    return {
      appLogo: Logo,
    };
  },
  components: {
    appImage: Image,
    appLogin: LoginField,
    appText: TextField,
  },
};
</script>

<style lang="scss" scoped>
.sign {
  // width: 100%;
  height: calc(100% - 60px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: calc(10rem + 5vw);
}

.login {
  width: calc(25rem + 1vw);
}

.copyright {
  color: $spun-pearl;
  font-size: 0.7em;
}
</style>
