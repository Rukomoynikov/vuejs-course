<template>
  <div class="field">
    <div class="flex">
      <label class="label">Date Birth</label>
      <button
        type="button"
        class="button is-small"
        @click="openPicker">
        open
      </button>
    </div>
    <div class="control">
      <input
        ref="datepicker"
        :value="value"
        class="input"
        type="text">
    </div>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import {Russian} from 'flatpickr/dist/l10n/ru.js'
import 'flatpickr/dist/flatpickr.min.css'

export default {
  name: 'DatePicker',
  model: {
    prop: 'value'
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.initDatePicker()
  },
  beforeDestroy () {
    this.picker.destroy()
  },
  methods: {
    initDatePicker () {
      this.picker = flatpickr(this.$refs.datepicker, {
        locale: Russian,
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    openPicker () {
      this.picker.open()
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }

  button {
    margin-bottom: 0.5em;
  }
</style>
