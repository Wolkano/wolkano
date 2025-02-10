<template>
  <div class="CrmMain">
    <div class="title">
      <img src="../assets/visioncrm-logo.png" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.CrmMain {
  background-color: $primary;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  .title {
    width: 20%;
  }
}
</style>
