<template>
  <div class="p-3.5">
    <div class="flex">
      <div class="flex items-center flex-grow">
        <div class="mr-2 text-sm">Moved post 1 form index 1 to index 2</div>
      </div>

      <div class="flex items-center">
        <div class="flex flex-col items-center">
          <Button>Time Travel</Button>
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
}
</script>
