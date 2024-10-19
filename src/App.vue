<template>
  <main-navbar />
  <router-view />
</template>

<script setup>
import MainNavbar from "@/components/MainNavbar.vue";
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  color: red;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
