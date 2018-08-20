<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Назад</a>
    <a class="pagination-next">Вперёд</a>
    <ul class="pagination-list">
      <li
        v-bind:key="page"
        v-for="page in pagesCount">
        <button
          v-on:click="selectPage(page)"
          class="pagination-link"
          v-bind:class="{ 'is-current': isPageActiv(page) }">
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
  methods: {
    selectPage (page) {
      this.$emit('input', page - 1)
    },
    isPageActiv (page) {
      return this.value === (page - 1)
    }
  },
  computed: {
    pagesCount () {
      const pagesCount = Math.ceil(this.usersCount / this.selectedPaginationStep)

      return pagesCount
    }
  }
}
</script>
