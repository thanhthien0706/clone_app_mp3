<template>
  <div class="defaultLayout">
    <div class="boxLeft">
      <div class="l__menuBox"></div>
    </div>
    <div class="boxRight">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style></style>
