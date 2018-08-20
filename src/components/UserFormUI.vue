<template>
  <div>
    <DatePicker
      v-model="localUser.registered" />

    <div class="field">
      <label class="label">First tName</label>
      <div class="control">
        <input
          v-validate="'required'"
          v-model="localUser.name.first"
          class="input"
          type="text"
          name="firstName">
      </div>
    </div>

    <div class="field">
      <label class="label">Last tName</label>
      <div class="control">
        <input
          v-model="localUser.name.last"
          class="input"
          type="text" >
      </div>
    </div>

    <div class="field">
      <label class="label">Biography</label>
      <MediumEditor v-model="localUser.about" />
    </div>

  </div>
</template>

<script>
const DatePicker = () => import('@/components/DatePicker.vue')
const MediumEditor = () => import('@/components/MediumEditor.vue')

export default {
  name: 'UserFormUI',
  components: { DatePicker, MediumEditor },
  model: {
    prop: 'user',
    event: 'changeUser'
  },
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
  watch: {
    localUser: {
      handler () {
        this.$emit('change', this.localUser)
        console.log(this.errors)
      },
      deep: true
    }
  },
  beforeMount () {
    this.localUser = Object.assign({}, this.user)
  }
}
</script>
