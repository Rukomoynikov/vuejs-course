<template>
  <div>
    <h1 class="title">Добавить пользователя</h1>

    <form @submit.prevent="createUser">

      <div class="field">
        <label class="label">First tName</label>
        <div class="control">
          <input
            v-model="user.name.first"
            class="input"
            type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Last tName</label>
        <div class="control">
          <input
            v-model="user.name.last"
            class="input"
            type="text">
        </div>
      </div>

      <button
        class="button is-primary">
        Отправить
      </button>

      <router-link :to="{ name: 'UsersTable' }">
        <button
          type="button"
          class="button">
          Вернуться в список пользователей
        </button>
      </router-link>

    </form>
  </div>
</template>

<script>
import axios from '@/utilities/http.js'

export default {
  name: 'NewUserForm',
  data () {
    return {
      user: {
        name: {
          last: '',
          first: ''
        }
      }
    }
  },
  methods: {
    createUser () {
      const params = this.user

      axios
        .post('users', params).then((response) => {
          this.$router.push('/users')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
