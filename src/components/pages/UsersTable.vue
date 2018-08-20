<template>
  <div>
    <users-list v-bind:users="usersOnPage"/>

    <div class="pagination">
      <div class="pagination__pageSwitcher">
        <PaginationStepSelect
          v-model="selectedPaginationStep"
          v-bind:paginationStep="paginationStep"/>
      </div>

      <Pagination
        v-bind:usersCount="usersCount"
        v-bind:selectedPaginationStep="selectedPaginationStep"
        v-model="selectedPage"
      />
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
import Pagination from '@/components/Pagination'
import PaginationStepSelect from '@/components/PaginationStepSelect'
import axios from '@/utilities/http'
import splitArray from 'split-array'

export default {

  name: 'UsersTable',
  components: {
    'users-list': UsersList,
    Pagination,
    PaginationStepSelect
  },
  data () {
    return {
      users: [],
      visible: 'list',
      editingUser: undefined,
      paginationStep: [5, 10, 20],
      selectedPaginationStep: 10,
      selectedPage: 0
    }
  },
  computed: {
    usersCount () {
      return this.users.length
    },
    usersOnPage () {
      if (this.users.length) {
        return splitArray(this.users, this.selectedPaginationStep)[this.selectedPage]
      } else {
        return []
      }
    }
  },
  mounted () {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      axios
        .get('users')
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

<style scoped lang="scss">
  .pagination {
    display: flex;
    justify-content: flex-start;

    &__pageSwitcher {
      margin-right: 20px;
    }
  }
</style>
