<template>
  <div>
    <component
      v-on:editUser="editUser"
      v-bind:users="users"
      v-bind:is="visibleComponent"
      v-if="visible == 'list'"></component>

    <component
      v-bind:is="visibleComponent"
      v-bind:editingUser="editingUser"
      v-on:updateUser="updateUser"
      v-on:returnToList="visible = 'list'"
      v-if="visible == 'editUser'"></component>
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
  computed: {
    visibleComponent () {
      return this.visible === 'editUser' ? 'user-form' : 'users-list'
    }
  },
  methods: {
    loadUsers () {
      HTTP
        .get(utilities.dataUrl + 'users')
        .then((response) => {
          this.users = response.data
        })
    },
    editUser (user) {
      this.editingUser = user.id
      this.visible = 'editUser'
    },
    updateUser (user) {
      const userId = this.users.findIndex(function (obj) { return obj.id === user.id })
      this.users[userId] = user
    }
  }
}
</script>
