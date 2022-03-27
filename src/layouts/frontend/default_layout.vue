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

          <div class="l__menuBox__body">
            <nav class="nav__menuMain">
              <ul class="nav__menuMain__list">
                <li class="nav__menuMain__item">
                  <router-link :to="{ name: 'discovery' }">
                    <fa :icon="['fas', 'compact-disc']" />
                  </router-link>
                </li>
              </ul>
            </nav>
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
