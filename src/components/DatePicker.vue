<template>
  <div class="field">
    <label class="label">Date Birth</label>
    <div class="control">
      <input
        class="input"
        v-bind:value="value"
        ref="datepicker"
        type="text">
    </div>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import {Russian} from 'flatpickr/dist/l10n/ru'
import 'flatpickr/dist/flatpickr.min.css'

export default {
  name: 'DatePicker',
  mounted () {
    this.initDatePicker()
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  model: {
    prop: 'value'
  },
  watch: {

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
    }
  }
}
</script>
