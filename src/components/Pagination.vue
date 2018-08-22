<template>
  <nav
    class="pagination is-centered"
    role="navigation"
    aria-label="pagination">
    <a
      v-if="value > 0"
      class="pagination-previous"
      @click="previousPage">Назад</a>
    <a
      v-if="pagesCount - 1 > value"
      class="pagination-next"
      @click="nextPage">Вперёд</a>
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
      return Math.ceil(this.usersCount / this.selectedPaginationStep)
    }
  },
  methods: {
    selectPage (page) {
      this.$emit('input', page - 1)
    },
    isPageActiv (page) {
      return this.value === (page - 1)
    },
    nextPage () {
      this.$emit('input', this.value + 1)
    },
    previousPage () {
      this.$emit('input', this.value - 1)
    }
  }
}
</script>
