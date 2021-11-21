<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addNewTodoItem="addNewTodoItem" />
    <TodoList
      v-bind:todoItems="todoItems"
      v-on:toggleComplete="toggleComplete"
      v-on:removeTodoItem="removeTodoItem"
    />
    <TodoFooter v-on:clearTodoItems="clearTodoItems" />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },

  data() {
    return {
      todoItems: [],
    };
  },

  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },

  methods: {
    addNewTodoItem: function (newTodoItem) {
      const obj = { isCompleted: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    toggleComplete: function (todoItem, index) {
      this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeTodoItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    clearTodoItems: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  min-width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
