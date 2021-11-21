<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addButton"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },

  methods: {
    addTodo: function () {
      if (this.newTodoItem !== '') {
        const obj = { isCompleted: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.inputBox {
  height: 50px;
  border-radius: 5px;
  background-color: white;
  line-height: 50px;

  input {
    border-style: none;
    font-size: 0.9rem;

    &:focus {
      outline: none;
    }
  }

  .addContainer {
    float: right;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(to right, #6478fb, #8763fb);

    .addButton {
      color: white;
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
