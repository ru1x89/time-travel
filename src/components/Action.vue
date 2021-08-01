<template>
  <div class="p-3.5">
    <div class="flex">
      <div class="flex items-center flex-grow">
        <div class="mr-2 text-sm">{{ description }}</div>
      </div>

      <div class="flex items-center">
        <div class="flex flex-col items-center">
          <Button @click="$emit('time-travel', actionIndex)"
            >Time Travel</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/utilities/Button'

export default {
  name: 'Action',

  components: {
    Button,
  },

  props: {
    actionIndex: Number,
    description: String,
  },
}
</script>
