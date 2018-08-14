<template>
  <div>
    <users-list v-bind:users="users" />

  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
import UserForm from '@/components/UserForm'
import {HTTP} from '@/utilities/http'

import utilities from '@/utilities/utilities'

export default {
  name: 'UsersTable',
  components: {
    'users-list': UsersList,
    'user-form': UserForm
  },
  data () {
    return {
      users: [],
      visible: 'list',
      editingUser: undefined
    }
  },
  mounted () {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      HTTP
        .get(utilities.dataUrl + 'users')
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => { console.log(error) })
    },
    updateUser (user) {
      const userId = this.users.findIndex(function (obj) { return obj.id === user.id })
      this.users[userId] = user
    }
  }
}
</script>
