<!-- todo -->
<template>
  <div :class="this['class']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VaColumn',
  props: {
    gutter: Number,
    'class': {
      type: String,
      default: ''
    }
  }
}
</script>
