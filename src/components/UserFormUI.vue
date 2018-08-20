<template>
  <div v-if="localUser != null">
    {{ localUser }}
    <DatePicker
      v-model="localUser.registered"
    />

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

    <div class="field">
      <label class="label">Biography</label>
      <MediumEditor v-model="localUser.about" />
    </div>

  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker'
import MediumEditor from '@/components/MediumEditor'

export default {
  name: 'UserFormUI',
  components: { DatePicker, MediumEditor },
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
      },
      deep: true
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
