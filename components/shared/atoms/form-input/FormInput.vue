<template>
  <div :class="wrapper">
    <label class="label" :for="random">{{ label }}</label>
    <input
      :id="random"
      class="input"
      :type="type"
      :name="name"
      :value="value"
      :class="className"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    wrapper: {
      type: String,
      default: 'grid gap-1.5'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    label: {
      type: String
    },
    className: {
      type: String,
      default: 'lg:input:small'
    }
  },
  data() {
    return {
      random: Math.random() * 10
    }
  }
})
</script>
