<template>
  <div>{{ user }}
  <form v-on:submit.prevent='updateUser' v-if="user != null">

    <div class="field">
      <label class="label">First tName</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model='user.name.first' />
      </div>
    </div>

    <div class="field">
      <label class="label">Last tName</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model='user.name.last' />
      </div>
    </div>

    <button
      class='button is-primary'>
      Сохранить
    </button>

    <button
      v-on:click="removeUser"
      type='button'
      class='button is-danger'>
      Удалить
    </button>

    <router-link :to="{ name: 'UsersTable' }">
      <button
        type='button'
        class='button'>
        Вернуться в список пользователей
      </button>
    </router-link>

  </form>
  </div>
</template>

<script>
export default {
  name: 'UserFormUI',
  props: ['user'],
  model: {
    prop: 'user'
  },
  methods: {
    removeUser () {

    }
  }
}
</script>
