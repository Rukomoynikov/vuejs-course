<template>
  <div>
      <h1 class="title">Редактирование пользователя</h1>

      <button
        type='button'
        class='button'
        v-on:click="returnToList">
        Вернуться в список пользователей
      </button>

      <form v-on:submit.prevent='updateUser'>

        <div class="field">
          <label class="label">First tName</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-bind:value='user.firstName'
              v-on:input="user.firstName = $event.target.value" />
          </div>
        </div>

        <div class="field">
          <label class="label">Family Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-bind:value='user.familyName'
              v-on:input="user.familyName = $event.target.value" />
          </div>
        </div>

        <div class="field">
          <label class="label">Last tName</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-bind:value='user.lastName'
              v-on:input="user.lastName = $event.target.value" />
          </div>
        </div>

      <button
        class='button is-primary'
        v-on:click="updateUser">
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
  props: {
    editingUser: {
      required: true,
      type: Number
    }
  },
  mounted () {
    this.loadUser()
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    loadUser () {
      axios.get(utilities.dataUrl + `users/${this.editingUser}`).then((response) => {
        this.user = response.data
      })
    },
    returnToList () {
      this.$emit('returnToList')
    },
    updateUser () {
      const params = this.user

      axios.put(utilities.dataUrl + `users/${this.editingUser}`, params).then((response) => {
        alert('Пользователь сохраненён')
        this.$emit('updateUser', this.user)
      })
    }
  }
}
</script>
