<template>
  <div
    class="bg-white overflow-hidden shadow-md rounded-md divide-y divide-gray-200"
  >
    <div class="px-4 py-5 text-lg leading-6 font-semibold">
      <slot name="card-header"></slot>
    </div>

    <div class="px-4 py-5 bg-gray-100">
      <slot name="card-body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>
