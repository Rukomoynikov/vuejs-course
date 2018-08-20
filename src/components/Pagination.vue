<template>
  <nav
    class="pagination is-centered"
    role="navigation"
    aria-label="pagination">
    <a class="pagination-previous">Назад</a>
    <a class="pagination-next">Вперёд</a>
    <ul class="pagination-list">
      <li
        v-for="page in pagesCount"
        :key="page">
        <button
          :class="{ 'is-current': isPageActiv(page) }"
          class="pagination-link"
          @click="selectPage(page)">
          {{ page }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    usersCount: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    selectedPaginationStep: {
      type: Number,
      required: true
    }
  },
  computed: {
    pagesCount () {
      const pagesCount = Math.ceil(this.usersCount / this.selectedPaginationStep)

      return pagesCount
    }
  },
  methods: {
    selectPage (page) {
      this.$emit('input', page - 1)
    },
    isPageActiv (page) {
      return this.value === (page - 1)
    }
  }
}
</script>
