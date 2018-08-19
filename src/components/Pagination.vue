<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Назад</a>
    <a class="pagination-next">Вперёд</a>
    <ul class="pagination-list">
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
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
    selectedPage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pages () {
      const pagesCount = Number(this.usersCount / this.selectedPaginationStep)
      const pages = []

      for (var i = 0; i < pagesCount; i++) {
        pages.push(i)
      }

      return pages
    }
  }
}
</script>

<style scoped>

</style>
