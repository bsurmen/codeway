<template>
  <header class="header">
    <div class="logo" @click="navigate('Home')">
      <app-image :src="logo" alt="app logo" />
    </div>
    <ul>
      <li
        class="menu__item menu__item--dropdown"
        :class="{ open: isOpen }"
        @mousedown="toggleMenu"
      >
        <a class="menu__link menu__link--toggle" href="#">
          <i class="fas fa-user profile"></i>
          <i class="fas fa-sort-down profile down"></i>
        </a>

        <ul class="dropdown-menu" @mouseleave="toggleMenu">
          <li
            class="dropdown-menu__item"
            v-for="(button, index) in subMenuItems"
            :key="index"
          >
            <div
              class="dropdown-menu__link"
              :class="{ active: isOpen && isActiveBtn(button.path) }"
              @click="button.action(button.name)"
            >
              {{ button.name }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from "../../assets/images/hedwig-logo.png";
import { reactive, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import Image from "../atoms/Image";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Header",
  components: {
    appImage: Image,
  },
  setup() {
    const data = reactive({
      logo: Logo,
      loggedIn: false,
      isOpen: false,
      isActive: true,
      subMenuItems: [
        { name: "Home", action: navigate, path: "/" },
        { name: "Profile", action: navigate, path: "/profile" },
        { name: "Log out", action: logOut },
      ],
    });

    const router = useRouter();

    async function logOut() {
      try {
        await firebase.auth().signOut();
        router.replace({ name: "Sign In" });
      } catch (err) {
        console.log(err);
      }
    }

    const getCurrentPath = computed(() => router.currentRoute.value.path);

    const isActiveBtn = (path) =>
      getCurrentPath.value === path ? data.isActive : !data.isActive;

    function navigate(path) {
      router.push({ name: path });
    }

    firebase.auth().onAuthStateChanged((user) => {
      data.loggedIn = !!user;
    });

    // Keeps state for dropdown menu.
    function toggleMenu() {
      data.isOpen = !data.isOpen;
    }

    return {
      ...toRefs(data),
      toggleMenu,
      logOut,
      navigate,
      isActiveBtn,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  @include gt-lg {
    grid-column: 2/3;
  }
}

.logo {
  width: 120px;
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
  top: 2.5rem;
  right: -0.6rem;
  display: none;
  border-radius: 4px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -8px;
    right: 5px;

    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid $white;
  }
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

.active {
  background-color: #ccc;
}
</style>

