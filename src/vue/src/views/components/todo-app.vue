<template>
  <div class="todoapp">
    <div>
      <header>
        <h1 class="title">todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus=""
          v-model="todoTitle"
          @keydown.enter="addTodo"
        />
      </header>

      <section class="main" v-if="todos.length">
        <input
          id="toggle-all"
          @click="toggleAll"
          v-model="toggleAllChecked"
          class="toggle-all"
          type="checkbox"
        />
        <label for="toggle-all"></label>
      </section>
      <ul class="todo-list">
        <li
          :key="item.id"
          v-for="item in todos"
          :class="{ completed: item.done }"
        >
          <div
            v-if="
              type === 'all' ||
              (type === 'active' && !item.done) ||
              (type === 'done' && item.done)
            "
            class="view"
          >
            <input
              class="toggle"
              type="checkbox"
              v-model="item.done"
              @click="toggle(item.id)"
            /><label>{{ item.title }}</label
            ><button class="destroy" @click="destroy(item.id)"></button>
          </div>
          <input class="edit" :value="item.title" />
        </li>
      </ul>
      <TodoFooter
        @filter="filter"
        @clear="clearDone"
        :left="left"
        :done="done"
        :type="type"
      ></TodoFooter>
    </div>
  </div>
</template>


<script>
import TodoFooter from './todo-footer.vue'
import todoStore from '../../stores/todo-store'

export default {
  data() {
    return todoStore.data
  },

  components: { TodoFooter },

  mounted() {
    todoStore.init()
  },
  methods: {
    addTodo() {
      todoStore.addTodo()
    },

    destroy(id) {
      todoStore.destroy(id)
    },

    toggle(id) {
      todoStore.toggle(id)
    },

    filter(type) {
      todoStore.filter(type)
    },

    clearDone() {
      todoStore.clearDone()
    },

    toggleAll() {
      todoStore.toggleAll()
    },
  },
}
</script>

