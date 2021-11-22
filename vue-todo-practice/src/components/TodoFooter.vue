<template>
  <div class="clearAllContainer">
    <span class="clearAllButton" v-on:click="clearTodoItems">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodoItems() {
      this.$store.commit('clearTodoItems');
    },
  },
};
</script>

<style lang="scss" scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  line-height: 50px;
  cursor: pointer;

  .clearAllButton {
    display: block;
    color: #e20303;
  }

  &:hover {
    background-color: #fadcd9;
  }
}
</style>
