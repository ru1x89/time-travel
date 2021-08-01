<template>
  <Card>
    <template #card-header>List of actions commited</template>

    <template #card-body>
      <div class="py-3.5 text-sm text-center" v-if="actionsList.length < 1">
        No posts sorted yet
      </div>

      <div class="bg-white shadow overflow-hidden rounded-md">
        <div class="divide-y divide-gray-200">
          <Action
            v-for="(action, actionIndex) in actionsList"
            :key="actionIndex"
            :action-index="actionIndex"
            :description="action.description"
            v-on="$listeners"
          />
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

  props: {
    actionsList: Array,
  },
}
</script>
