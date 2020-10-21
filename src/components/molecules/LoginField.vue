<template>
  <app-text text="Please sign in" type="h4" />
  <app-input placeholder="E-mail address" className="radius--top" />
  <app-input
    placeholder="Password"
    className="radius--bottom"
    type="password"
  />
  <app-button text="Sign In" />
</template>

<script>
import TextField from "../atoms/TextField";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default {
  name: "LoginField",
  components: {
    appText: TextField,
    appInput: Input,
    appButton: Button,
  },
};
</script>

<style>
</style>
