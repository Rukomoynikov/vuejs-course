<template>
  <div class="select">
    <select
      v-model="selectedStep"
      class="form-control"
      @change="updateStep">

      <option
        v-for="i in paginationStep"
        :key="i"
        :value="i">{{ i }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'PaginationStepSelect',
  props: {
    value: {
      type: Number,
      default: 5
    },
    paginationStep: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      selectedStep: null
    }
  },
  mounted () {
    this.selectedStep = this.value
  },
  methods: {
    updateStep () {
      this.$emit('input', this.selectedStep)
    }
  }
}
</script>
