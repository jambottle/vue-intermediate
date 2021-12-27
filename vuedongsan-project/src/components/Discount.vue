<template>
  <aside class="discount">
    <h4>지금 결제하면 {{ discountRate }}% 할인</h4>
  </aside>
</template>

<script>
export default {
  name: 'Discount',

  data() {
    return {
      discountRate: 30,
    };
  },

  mounted() {
    setInterval(() => {
      if (this.discountRate > 0) {
        this.discountRate--;
      } else if (this.discountRate <= 0) {
        clearInterval(this.discountRate);
      }
    }, 1000);
  },
};
</script>

<style scoped>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
