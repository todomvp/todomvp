<template>
  <footer class="footer">
    <div class="todo-count">
      <span class="strong">{{ left }}</span>
      <span> items</span>
      <span> left</span>
    </div>
    <ul class="filters">
      <li class="ib" @click="showAll">
        <a :class="{ selected: type === 'all' }">All</a>
      </li>
      <li class="ib" @click="showActive">
        <a :class="{ selected: type === 'active' }">Active</a>
      </li>
      <li class="ib" @click="showDone">
        <a :class="{ selected: type === 'done' }">Done</a>
      </li>
    </ul>
    <template v-if="done > 0">
      <button class="clear-completed" @click="clearDone">Clear done</button>
    </template>
  </footer>
</template>>


<script>
export default {
  props: {
    left: {
      type: Number,
      value: 0,
    },
    type: {
      type: String,
      value: 'all',
    },
    done: {
      type: Number,
      value: 0,
    },
  },
  methods: {
    showAll() {
      this.$emit('filter', 'all')
    },

    showActive() {
      this.$emit('filter', 'active')
    },

    showDone() {
      this.$emit('filter', 'done')
    },

    clearDone() {
      this.$emit('clear')
    },
  },
}
</script>

