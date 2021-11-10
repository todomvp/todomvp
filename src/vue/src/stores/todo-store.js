const TodoModel = require('../models/todo-model');

class TodoStore {
  constructor() {
    this.data = {
      todoTitle: '',
      todos: [],
      toggleAllChecked: false,
      left: 0,
      done: 0,
      type: 'all'
    };

    this.todo = new TodoModel();

    this.todo.subscribe(() => {
      this.data.todos = this.todo.todos;
      this.computeCount();
    });

  }

  init() {
    this.data.todos = this.todo.todos;
    this.data.type = 'all';
    this.computeCount();
  }

  addTodo() {
    if (this.data.todoTitle.trim() === '') {
      return;
    }
    this.todo.addTodo(this.data.todoTitle);
    this.data.todoTitle = '';
  }

  toggle(id) {
    this.todo.toggle(id);
  }

  toggleAll() {
    this.todo.toggleAll(!this.data.toggleAllChecked);
  }

  destroy(id) {
    this.todo.destroy(id);
  }

  computeCount() {
    this.data.left = 0;
    this.data.done = 0;
    for (let i = 0, len = this.data.todos.length; i < len; i++) {
      this.data.todos[i].done ? this.data.done++ : this.data.left++;
    }

    this.data.toggleAllChecked = this.data.left === 0
  }

  clearDone() {
    this.todo.clearDone();
  }

  filter(type) {
    this.data.type = type;
  }
}


module.exports = new TodoStore;
