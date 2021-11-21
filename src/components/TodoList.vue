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
        v-on:click="toggleComplete(todoItem, index)"
      ></i>
      <span v-bind:class="{ textCompleted: todoItem.isCompleted }">
        {{ todoItem.item }}
      </span>
      <span class="removeButton" v-on:click="removeTodoItem(todoItem, index)">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todoItems'],

  methods: {
    toggleComplete: function (todoItem, index) {
      this.$emit('toggleComplete', todoItem, index);
    },
    removeTodoItem: function (todoItem, index) {
      this.$emit('removeTodoItem', todoItem, index);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin-bottom: 0.5rem;
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
      cursor: pointer;
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
      cursor: pointer;
    }
  }
}
</style>
