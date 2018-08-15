<template>
  <div v-if="user != null">

    <div class="field">
      <label class="label">First tName</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="user.name.first" />
      </div>
    </div>

    <div class="field">
      <label class="label">Last tName</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="user.name.last" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserFormUI',
  props: ['value'],
  data () {
    return {
      user: null
    }
  },
  watch: {
    user: {
      handler (newVal, oldVal) {
        this.$emit('changeUser', JSON.parse(JSON.stringify(newVal)))
      },
      deep: true
    }
  },
  mounted () {
    this.user = JSON.parse(JSON.stringify(this.$props.value))
  }
}
</script>
