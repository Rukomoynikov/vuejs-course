<template>
  <div class="navigation">
    <router-link :to="{ name: 'Root' }" class='navigation__logo'>VUE JS COURSE</router-link>

    <div class="navigation__menu">
      <router-link :to="{ name: 'PageAbout' }" active-class="active">About</router-link>
      <router-link :to="{ name: 'UsersTable' }" active-class="active">Users</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
  .navigation {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: #e1e1e1;
    margin-bottom: 20px;

    &__logo {
      font-weight: bold;
      margin-right: 20px;
      color: black;
    }

    a.active {
      text-decoration: underline;
    }
  }
</style>
