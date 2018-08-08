<template>
  <div>
    <h1 class="title">Пользователи [{{ usersCount }}]</h1>

    <!-- <h1 class='title'>Список участников клуба [{{ usersCount }}]</h1> -->
    <button
      type='button'
      class='button'
      v-on:click="toggleUsersList">
      {{ buttonText }}
    </button>
    <transition name="fade">
    <table class='table' v-show="showUsers">
      <thead>
        <tr>
          <th>Аватар</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key='user.id' v-for="user in users">
          <td><img width='40px' v-bind:src=getUserAvatar(user.avatar) /></td>
          <td>{{ user.firstName | toUpperCase }}</td>
          <td>{{ user.familyName | toUpperCase}}</td>
          <td>{{ user.lastName | toUpperCase}}</td>
          <td><button v-copy="userForCopy(user)">copy</button></td>
          <td><button v-on:click="editUser(user)">edit</button></td>
        </tr>
      </tbody>
    </table>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      showUsers: true,
      defaultAvatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    }
  },
  methods: {
    toggleUsersList () {
      this.showUsers = !this.showUsers
    },
    getUserAvatar (avatar) {
      return avatar || this.defaultAvatar
    },
    userForCopy (user) {
      return user.firstName + ' ' + user.familyName + ' ' + user.lastName
    },
    editUser (user) {
      this.$emit('editUser', user)
    }
  },
  computed: {
    usersCount () {
      return this.users.length
    },
    buttonText () {
      return this.showUsers ? 'Скрыть таблицу' : 'Показать таблицу'
    },
    buttonTooltip () {
      return this.showUsers ? 'Скрыть таблицу' : 'Показать таблицу'
    }
  },
  filters: {
    toUpperCase (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  .title {
   display: inline-block;
  }
</style>
