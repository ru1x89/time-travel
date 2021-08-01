<template>
  <Card>
    <template #card-header> List of actions commited </template>

    <template #card-body>
      <div class="bg-white shadow overflow-hidden rounded-md">
        <div class="divide-y divide-gray-200">
          <Action />
          <Action />
          <Action />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import Action from '@/components/Action'
import Card from '@/components/utilities/Card'

export default {
  name: 'ActionsContainer',

  components: {
    Card,
    Action,
  },
}
</script>
