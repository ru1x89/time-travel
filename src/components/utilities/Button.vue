<template>
  <button
    class="
      px-4
      py-2
      font-semibold
      text-sm text-gray-700
      bg-green-400
      hover:bg-green-500
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
      rounded
      transition
      duration-300
      ease-in-out
    "
    type="button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>
