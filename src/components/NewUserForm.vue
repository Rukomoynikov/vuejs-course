<template>
  <div>
      <h1 class="title">Добавить пользователя</h1>

      <form v-on:submit.prevent='createUser'>

        <div class="field">
          <label class="label">First tName</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model='user.name.first' />
          </div>
        </div>

        <div class="field">
          <label class="label">Last tName</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model='user.name.last' />
          </div>
        </div>

      <button
        class='button is-primary'>
        Отправить
      </button>

      <router-link :to="{ name: 'UsersTable' }">
        <button
        type='button'
        class='button'>
          Вернуться в список пользователей
        </button>
      </router-link>

      </form>
  </div>
</template>

<script>
import utilities from '@/utilities/utilities'
import {HTTP} from '@/utilities/http'

export default {
  name: 'NewUserForm',
  methods: {
    createUser () {
      const params = this.user

      HTTP.post(`${utilities.dataUrl}users`, params).then((response) => {
        this.$router.push('/users')
      })
    }
  },
  data () {
    return {
      user: {
        name: {
          last: '',
          first: ''
        }
      }
    }
  }
}
</script>
