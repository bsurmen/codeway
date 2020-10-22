<template>
  <header class="header">
    <div class="logo">
      <app-image :src="logo" />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sign-in">Sign In</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>
    <li
      class="menu__item menu__item--dropdown"
      @click="toggle('ranking')"
      v-bind:class="{ open: dropDowns.ranking.open }"
    >
      <a class="menu__link menu__link--toggle" href="#">
        <i class="fas fa-user profile"></i>
        <i class="fas fa-sort-down profile"></i>
      </a>

      <ul class="dropdown-menu">
        <li class="dropdown-menu__item">
          <a class="dropdown-menu__link" href="#">Profile</a>
        </li>

        <li class="dropdown-menu__item">
          <a class="dropdown-menu__link" href="#">Log out</a>
        </li>
      </ul>
    </li>
  </header>
</template>

<script>
import Logo from "../../assets/images/hedwig-logo.png";
import Image from "../atoms/Image";

export default {
  name: "Header",
  data() {
    return {
      logo: Logo,
      dropDowns: {
        ranking: { open: false },
      },
    };
  },
  components: {
    appImage: Image,
  },
  methods: {
    toggle: function (dropdownName) {
      //alert(dropdownName)
      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
    },

    close: function () {
      for (let dd in this.dropDowns) {
        this.dropDowns[dd].open = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo {
  width: 100px;
  height: 100%;
}

.profile {
  color: $fuchsia-pink;
}

#nav {
  //   width: 100%;
  background-color: red;
  height: 60px;
}

.menu {
  display: flex;

  &__item {
    position: relative;
    padding-right: 3rem;

    &--dropdown {
    }
  }

  &__link {
    //color: $menu_link_color;
    text-transform: uppercase;

    &:hover {
      //color: $menu_link_hover_color;
    }

    &--toggle {
    }
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
  min-width: 150px;
  top: 2.2rem;
  right: 2.2rem;
  display: none;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
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
  color: grey;
  background-color: #fafafa;

  &:hover {
    color: green;
    background-color: #ccc;
  }
}
</style>
