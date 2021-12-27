<template>
  <article>
    <img class="room-img" :src="room.image" />
    <h4 @click="openModal">{{ room.title }}</h4>
    <p>{{ room.price.toLocaleString() }}원</p>
  </article>
</template>

<script>
export default {
  name: 'Card',

  props: {
    room: Object,
  },

  methods: {
    openModal() {
      this.$emit('openModal', this.room.id);
    },
  },
};
</script>

<style scoped>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
