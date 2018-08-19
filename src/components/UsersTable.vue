<template>
  <div>
    <users-list v-bind:users="users"/>

    <PaginationStepSelect
      v-model="selectedPaginationStep"
      v-bind:paginationStep="paginationStep"/>

    <Pagination
      v-bind:usersCount="usersCount"
      v-bind:selectedPage="selectedPage"
    />
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
import UserForm from '@/components/UserForm'
import Pagination from '@/components/Pagination'
import PaginationStepSelect from '@/components/PaginationStepSelect'
import {HTTP} from '@/utilities/http'

import utilities from '@/utilities/utilities'

export default {
  name: 'UsersTable',
  components: {
    'users-list': UsersList,
    'user-form': UserForm,
    Pagination,
    PaginationStepSelect
  },
  data () {
    return {
      users: [],
      visible: 'list',
      editingUser: undefined,
      paginationStep: [5, 10, 20],
      selectedPaginationStep: 5,
      selectedPage: 0
    }
  },
  computed: {
    usersCount () {
      return this.users.length
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
