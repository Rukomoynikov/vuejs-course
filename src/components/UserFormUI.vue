<template>
  <div>{{ user }}


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
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: 'user'
  },
  methods: {
    removeUser () {

    }
  }
}
</script>
