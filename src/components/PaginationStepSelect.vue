<template>
  <div class="select">
    <select class="form-control" v-model="selectedStep" v-on:change="updateStep">
      <option
        v-bind:key="i"
        v-for="i in paginationStep"
        v-bind:value="i">{{ i }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'PaginationStepSelect',
  data () {
    return {
      selectedStep: null
    }
  },
  props: {
    value: {
      type: Number,
      default: 5
    },
    paginationStep: {
      type: Array
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
