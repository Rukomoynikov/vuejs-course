<template>
  <div>
    <users-list v-bind:users="users"> </users-list>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
import axios from 'axios'

export default {
  name: 'UsersTable',
  components: {
    'users-list': UsersList
  },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      axios
        .get('http://localhost:3000/users')
        .then((response) => {
          this.users = response.data
        })
    }
  }
}
</script>
