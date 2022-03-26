<template>
  <div class="defaultLayout">
    <div class="defaultLayout__inner">
      <div class="boxLeft">
        <div class="l__menuBox">
          <div class="l__menuBox__logo">
            <router-link
              :to="{ name: 'discovery' }"
              class="l__menuBox__logo__link"
            >
              <div class="logo"></div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="boxRight">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped src="@/assets/style/main.scss"></style>
