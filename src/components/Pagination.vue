<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    {{ pages }}
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
  mounted () {

  },
  props: {
    selectedPaginationStep: {
      type: Number,
      default: 5
    },
    paginationStep: {
      type: Array
    },
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
  },
  watch: {
    // usersCount (newVal, oldVal) {
    //   console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    // }
  }
}
</script>

<style scoped>

</style>
