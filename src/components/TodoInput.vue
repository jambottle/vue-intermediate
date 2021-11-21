<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      v-on:keypress.enter="addNewTodoItem"
    />
    <span class="addContainer" v-on:click="addNewTodoItem">
      <i class="fas fa-plus addButton"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!-- you can use custom content here to overwrite default content -->
      <h3 slot="header">
        경고!
        <i
          class="fas fa-times-circle closeModalButton"
          @click="showModal = false"
        ></i>
      </h3>
      <p slot="body">입력된 값이 없습니다.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },

  components: {
    Modal,
  },

  methods: {
    addNewTodoItem: function () {
      if (this.newTodoItem !== '') {
        this.$emit('addNewTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
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
  position: relative;
  height: 50px;
  border-radius: 5px;
  background-color: white;
  line-height: 50px;

  input {
    position: absolute;
    top: 15px;
    left: 2rem;
    width: 90%;
    border-style: none;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  .addContainer {
    position: absolute;
    right: 0;
    z-index: 1;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(to right, #6478fb, #8763fb);
    cursor: pointer;

    .addButton {
      color: white;
      vertical-align: middle;
    }
  }

  .closeModalButton {
    color: #42b983;
    cursor: pointer;
  }
}
</style>
