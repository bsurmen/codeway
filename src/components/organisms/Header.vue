<template>
  <header class="header">
    <div class="logo" @click="this.$router.push({ name: 'Home' })">
      <app-image :src="logo" />
    </div>

    <li
      class="menu__item menu__item--dropdown"
      @click="toggle"
      :class="{ open: isOpen }"
    >
      <a class="menu__link menu__link--toggle" href="#">
        <i class="fas fa-user profile"></i>
        <i class="fas fa-sort-down profile down"></i>
      </a>

      <ul class="dropdown-menu">
        <li class="dropdown-menu__item">
          <div
            class="dropdown-menu__link"
            @click="this.$router.push({ name: 'Profile' })"
          >
            Profile
          </div>
        </li>

        <li class="dropdown-menu__item">
          <div class="dropdown-menu__link" @click="logOut">Log out</div>
        </li>
      </ul>
    </li>
  </header>
</template>

<script>
import Logo from "../../assets/images/hedwig-logo.png";
import Image from "../atoms/Image";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Header",
  data() {
    return {
      logo: Logo,
      loggedIn: false,
      isOpen: false,
    };
  },
  components: {
    appImage: Image,
  },
  methods: {
    async logOut() {
      try {
        await firebase.auth().signOut();
        this.$router.replace({ name: "Sign In" });
      } catch (err) {
        console.log(err);
      }
    },

    toggle: function () {
      this.isOpen = !this.isOpen;
    },

    close: function () {
      this.isOpen = false;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em 1em 1.5em 1em;
}

.logo {
  width: 120px;
  height: 100%;
  cursor: pointer;
}

.profile {
  color: $fuchsia-pink;
  font-size: 1.4rem;
}

.down {
  font-size: 0.9rem;
  position: relative;
  bottom: 11px;
}

#nav {
  height: 60px;
}

.menu {
  display: flex;

  &__item {
    position: relative;
  }

  &__icon {
    margin: 0 !important;
  }
}

.open .dropdown-menu {
  display: block;
}

.dropdown-menu {
  font-size: 0.9rem;
  position: absolute;
  min-width: 200px;
  top: 1.5rem;
  right: -0.6rem;
  display: none;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-menu__item:first-child .dropdown-menu__link {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.dropdown-menu__item:last-child .dropdown-menu__link {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.dropdown-menu__link {
  display: block;

  padding: 1rem;
  color: $steel-gray;
  background-color: $white;

  &:hover {
    color: $martinique;
    background-color: #ccc;
  }
}
</style>

