<template>
  <div class="black-bg" v-if="isModalOpened === true">
    <div class="white-bg">
      <img :src="rooms[selectedRoomId].image" style="width: 100%" />
      <h4>{{ rooms[selectedRoomId].title }}</h4>
      <p>{{ rooms[selectedRoomId].content }}</p>

      <!-- <input
        type="number"
        @input="month = $event.target.value"
      /> -->
      <input type="number" v-model.number="month" />
      <p>
        {{ month }}개월 선택: 총
        {{ (rooms[selectedRoomId].price * month).toLocaleString() }}원
      </p>

      <button @click="closeModal"><b>닫기</b></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    rooms: Array,
    selectedRoomId: Number,
    isModalOpened: Boolean,
  },

  data() {
    return {
      month: 1,
    };
  },

  watch: {
    month(value) {
      if (value < 1) {
        this.month = 1;
      } else if (value > 12) {
        alert('12개월까지만 예약할 수 있습니다.');
        this.month = 12;
      }
    },
  },

  beforeUpdate() {
    if (this.month === 2) {
      alert(
        '2개월 예약은 불가능합니다. 장기 숙박은 3개월부터 예약 가능합니다.'
      );
      this.month = 3;
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style scoped>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
