<template>
  <main>
    <nav class="menu">
      <a v-for="menu in menus" :key="menu">{{ menu }}</a>
    </nav>

    <Discount v-if="hideDiscount === false" />

    <button @click="sortRoomsByPriceAsc" style="margin-right: 5px">
      낮은가격순
    </button>
    <button @click="sortRoomsByPriceDesc" style="margin-right: 5px">
      높은가격순
    </button>
    <button @click="refreshSortedRooms">되돌리기</button>

    <transition name="fade">
      <Modal
        :rooms="rooms"
        :selectedRoomId="selectedRoomId"
        :isModalOpened="isModalOpened"
        @closeModal="isModalOpened = false"
      />
    </transition>

    <Card
      v-for="(room, id) in rooms"
      :key="id"
      :room="rooms[id]"
      @openModal="
        selectedRoomId = $event;
        isModalOpened = true;
      "
    />
  </main>
</template>

<script>
import roomData from '@/assets/roomData.js';
import Discount from '@/components/Discount.vue';
import Modal from '@/components/Modal.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'App',

  components: {
    Discount,
    Modal,
    Card,
  },

  data() {
    return {
      menus: ['Home', 'Shop', 'About'],
      roomsOriginal: roomData,
      rooms: [...roomData],
      selectedRoomId: 0,
      isModalOpened: false,
      hideDiscount: false,
    };
  },

  // created() {
  //   서버에서 데이터 가져오는 코드 작성 가능 (ex. AJAX, Axios)
  // },

  // mounted() {
  //   setTimeout(() => {
  //     this.hideDiscount = true;
  //   }, 2000);
  // },

  methods: {
    sortRoomsByPriceAsc() {
      this.rooms.sort((a, b) => a.price - b.price);
    },
    sortRoomsByPriceDesc() {
      this.rooms.sort((a, b) => b.price - a.price);
    },
    refreshSortedRooms() {
      this.rooms = [...this.roomsOriginal];
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.fade-enter-from {
  transform: translateY(1000px);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
