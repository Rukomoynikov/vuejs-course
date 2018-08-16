<template>
  <div v-if="localUser != null">
    {{ localUser }}

    <div class="field">
      <label class="label">First tName</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="localUser.name.first" />
      </div>
    </div>

    <div class="field">
      <label class="label">Last tName</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="localUser.name.last" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserFormUI',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localUser: null
    }
  },
  model: {
    prop: 'user',
    event: 'changeUser'
  },
  mounted () {
    this.localUser = Object.assign({}, this.$props.user)
  }
}
</script>
