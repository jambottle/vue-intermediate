<template>
  <ul>
    <li
      v-for="(todoItem, index) in todoItems"
      v-bind:key="todoItem.item"
      class="shadow"
    >
      <i
        class="fas fa-check checkButton"
        v-bind:class="{ checkButtonCompleted: todoItem.isCompleted }"
        v-on:click="toggleComplete(todoItem)"
      ></i>
      <span v-bind:class="{ textCompleted: todoItem.isCompleted }">
        {{ todoItem.item }}
      </span>
      <span class="removeButton" v-on:click="removeTodo(todoItem, index)">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },

  methods: {
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (todoItem) {
      todoItem.isCompleted = !todoItem.isCompleted;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
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
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin-top: 0;
  padding-inline-start: 0;
  text-align: left;

  li {
    display: flex;
    height: 50px;
    min-height: 50px;
    margin: 0.5rem 0;
    border-radius: 5px;
    padding: 0 1rem;
    background-color: white;
    line-height: 50px;

    .checkButton {
      margin-right: 10px;
      color: #62acde;
      line-height: 45px;

      &:hover {
        cursor: pointer;
      }
    }

    .checkButtonCompleted {
      color: #b3adad;
    }

    .textCompleted {
      color: #b3adad;
      text-decoration: line-through;
    }

    .removeButton {
      margin-left: auto;
      color: #de4343;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
