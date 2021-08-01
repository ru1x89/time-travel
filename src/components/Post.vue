<template>
  <div
    class="
      px-2
      py-1
      flex
      content-center
      bg-white
      shadow-md
      overflow-hidden
      rounded-md
    "
  >
    <div class="flex w-full">
      <div class="mx-2 flex flex-1 items-center">
        <div class="text-gray-700 font-semibold truncate">
          {{ item.id }}. {{ item.title }}
        </div>
      </div>

      <div class="flex flex-col">
        <button
          class="
            my-1
            rounded-md
            hover:bg-purple-400
            focus:outline-none focus:ring-2 focus:ring-purple-400
            transition
            duration-500
            ease-in-out
            group
          "
          type="button"
        >
          <svg
            class="
              w-6
              h-6
              text-purple-400
              group-hover:text-white
              transition
              duration-500
              ease-in-out
            "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          class="
            my-1
            rounded-md
            hover:bg-purple-400
            focus:outline-none focus:ring-2 focus:ring-purple-400
            transition
            duration-500
            ease-in-out
            group
          "
          type="button"
        >
          <svg
            class="
              w-6
              h-6
              text-purple-400
              group-hover:text-white
              transition
              duration-500
              ease-in-out
            "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    item: Object,
    index: Number,
    itemLength: Number,
  },
}
</script>
