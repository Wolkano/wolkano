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

.button-56 {
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #ffbc4f;
  font-weight: 600;
}

.button-56:hover {
  background-color: #fe9d01;
  cursor: pointer;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
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
