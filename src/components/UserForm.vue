<template>
  <div>
      <h1 class="title">Редактирование пользователя</h1>

      <router-link :to="{ name: 'UsersTable' }">
        <button
        type='button'
        class='button'>
          Вернуться в список пользователей
        </button>
      </router-link>

      <!-- <button
        type='button'
        class='button'
        v-on:click="returnToList">
        Вернуться в список пользователей
      </button> -->

      <form v-on:submit.prevent='updateUser' v-show="user != null">

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
        Сохранить
      </button>

      </form>
  </div>
</template>

<script>
import axios from 'axios'
import utilities from '@/utilities/utilities'

export default {
  name: 'UserForm',
  mounted () {
    this.userID = this.$route.params.id
    this.loadUser()
  },
  data () {
    return {
      userID: null,
      user: {}
    }
  },
  methods: {
    loadUser () {
      axios.get(utilities.dataUrl + `users/${this.userID}`).then((response) => {
        this.user = response.data
      })
    },
    updateUser () {
      const params = this.user

      axios.put(utilities.dataUrl + `users/${this.userID}`, params).then((response) => {
        alert('Пользователь сохраненён')
        this.$emit('updateUser', this.user)
      })
    }
  }
}
</script>
