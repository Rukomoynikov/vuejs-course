<template>
  <div>
    <h1 class="title">Пользователи [{{ usersCount }}]</h1>

    <button
      type="button"
      class="button"
      v-on:click="toggleUsersList">
      {{ buttonText }}
    </button>

    <router-link v-bind:to="{ name: 'NewUserForm' }">
      <button
        type="button"
        class="button">
        Добавить пользователя
      </button>
    </router-link>

    <transition name="fade">
      <table class="table" v-show="showUsers">
        <thead>
          <slot name="header">
            <tr>
              <th>Аватар</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th></th>
              <th></th>
            </tr>
          </slot>
        </thead>
        <tbody>
          <tr v-bind:key="user.id" v-for="user in users">
            <td><img width="40px" v-bind:src="getUserAvatar(user.picture)" /></td>
            <td>{{ user.name.first  | toUpperCase }}</td>
            <td>{{ user.name.last | toUpperCase}}</td>
            <td>
              <button class="button" v-copy="userForCopy(user)">Копировать</button>
            </td>
            <td>
              <router-link :to="{ name: 'UserForm', params: { id: user.id } }">
                <button
                type="button"
                class="button">
                  Редактировать
                </button>
              </router-link>
            </td>
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
      return `${user.name.first} ${user.name.last}`
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
      if (!value.length) {
        return ''
      }

      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  .title {
    display: inline-block;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>
