<template>
  <main-navbar class="navbarComponent" />
  <router-view class="content" />
  <main-footer />
</template>

<script setup>
import MainNavbar from "@/components/MainNavbar.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<style lang="scss">
.navbarComponent {
  position: absolute;
}
.content {
  padding-top: 150px;
  top: 0;
}
#app {
  text-align: center;
  color: white;
  margin-left: auto;
  margin-right: auto;
}
</style>
