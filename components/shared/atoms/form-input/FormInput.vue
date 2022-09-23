<!-- eslint-disable vue/require-default-prop -->
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
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
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
