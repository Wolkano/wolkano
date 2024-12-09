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
</style>
