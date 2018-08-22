<template>
  <div>
    <users-list :users="usersOnPage"/>

    <div class="pagination">
      <div class="pagination__pageSwitcher">
        <PaginationStepSelect
          :paginationStep="paginationStep"
          v-model="selectedPaginationStep" />
      </div>

      <Pagination
        :usersCount="usersCount"
        :selectedPaginationStep="selectedPaginationStep"
        v-model="selectedPage"
      />
    </div>
  </div>
</template>

<script>
import axios from '@/utilities/http.js'
import splitArray from 'split-array'

const UsersList = () => import('@/components/UsersList.vue')
const Pagination = () => import('@/components/Pagination.vue')
const PaginationStepSelect = () => import('@/components/PaginationStepSelect.vue')

export default {

  name: 'UsersTable',
  components: {
    'users-list': UsersList,
    Pagination,
    PaginationStepSelect
  },
  data () {
    return {
      visible: 'list',
      editingUser: undefined,
      paginationStep: [5, 10, 20],
      selectedPaginationStep: 10,
      selectedPage: 0
    }
  },
  computed: {
    users () {
      return this.$store.state.users || []
    },
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
      this.$store.dispatch('loadUsers')
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
