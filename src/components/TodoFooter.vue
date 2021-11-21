<template>
  <div class="clearAllContainer">
    <span class="clearAllButton" v-on:click="clearTodoItems">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodoItems: function () {
      this.$emit('clearTodoItems');
    },
  },
};
</script>

<style lang="scss" scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;

  .clearAllButton {
    color: #e20303;
    /* 추가 */
    display: block;
  }

  &:hover {
    background-color: #fadcd9;
    cursor: pointer;
  }
}
</style>
