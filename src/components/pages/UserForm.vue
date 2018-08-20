<template>
  <div>
    <h1 class="title">Редактирование пользователя</h1>
    {{ errors }}

    <form @submit.prevent="updateUser">
      <UserFormUI
        v-if="user"
        v-model="user" />
      <br>

      <button
        class="button is-primary">
        Сохранить
      </button>

      <button
        class="button is-danger"
        type="button"
        @click="removeUser">
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
import axios from '@/utilities/http.js'
const UserFormUI = () => import('@/components/UserFormUI.vue')

export default {
  name: 'UserForm',
  components: { UserFormUI },
  data () {
    return {
      userID: null,
      user: null
    }
  },
  computed: {
    userPath () {
      return `users/${this.$route.params.id}`
    }
  },
  mounted () {
    this.loadUser()
  },
  methods: {
    loadUser () {
      axios.get(this.userPath).then((response) => {
        this.user = response.data
      })
    },
    changeUser (newUser) {
      this.user = JSON.parse(JSON.stringify(newUser))
    },
    updateUser () {
      const params = this.user

      if (this.errors.items.length) {
        return alert('Ошибки в форме')
      }

      axios.put(this.userPath, params).then((response) => {
        alert('Пользователь сохраненён')
        this.$emit('updateUser', this.user)
      })
    },
    removeUser () {
      axios
        .delete(this.userPath)
        .then((response) => {
          this.$router.replace('/users')
        })
    }
  }
}
</script>
