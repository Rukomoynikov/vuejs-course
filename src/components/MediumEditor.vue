<template>
  <div>
    <textarea
      ref="input"
      v-model="value"
      class="textarea" />
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.min.css'
import 'medium-editor/dist/css/themes/flat.min.css'

export default {
  name: 'MediumEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new MediumEditor(this.$refs.input)

    this.editor.subscribe('editableInput', (event, editorElement) => {
      this.$emit('input', this.editor.getContent())
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
