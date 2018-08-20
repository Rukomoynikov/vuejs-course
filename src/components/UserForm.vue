<template>
  <div>
    <h1 class="title">Редактирование пользователя</h1>

    <form v-on:submit.prevent="updateUser">

      <UserFormUI
        v-model="user"
        v-if="user != null" />
      <br>

      <button
        class="button is-primary">
        Сохранить
      </button>

      <button
        v-on:click="removeUser"
        type="button"
        class="button is-danger">
        Удалить
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
import utilities from '@/utilities/utilities'
import UserFormUI from '@/components/UserFormUI'
import {HTTP} from '@/utilities/http'

export default {
  name: 'UserForm',
  mounted () {
    this.loadUser()
  },
  components: { UserFormUI },
  data () {
    return {
      userID: null,
      user: null
    }
  },
  computed: {
    userPath () {
      return `${utilities.dataUrl}users/${this.$route.params.id}`
    }
  },
  methods: {
    loadUser () {
      HTTP.get(this.userPath).then((response) => {
        this.user = response.data
      })
    },
    changeUser (newUser) {
      this.user = JSON.parse(JSON.stringify(newUser))
    },
    updateUser () {
      const params = this.user

      HTTP.put(this.userPath, params).then((response) => {
        alert('Пользователь сохраненён')
        this.$emit('updateUser', this.user)
      })
    },
    removeUser () {
      HTTP
        .delete(this.userPath)
        .then((response) => {
          this.$router.replace('/users')
        })
    }
  }
}
</script>
