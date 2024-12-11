<template>
  <main-navbar class="navbarComponent" />
  <router-view class="content" />
</template>

<script setup>
import MainNavbar from "@/components/MainNavbar.vue";
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
