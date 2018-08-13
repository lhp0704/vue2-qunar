<template>
  <ul class="list">
    <li class="list-item" v-for="item in letterList" :key="item" :ref="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="selectItem">
      {{item}}
    </li>
  </ul>
</template>

<script>
const COMPONENT_NAME = "letter-list";

export default {
  name: COMPONENT_NAME,
  props: {
    cityList: Object
  },
  computed: {
    letterList() {
      const letterList = [];
      for (let item in this.cityList) {
        letterList.push(item);
      }
      return letterList;
    }
  },
  data() {
    return {
      touch: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    selectItem(e) {
      this.$emit("select", e.target.innerText);
    },
    handleTouchStart() {
      this.touch = true;
    },
    handleTouchMove(e) {
      if (this.touch) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letterList.length) {
            this.$emit("select", this.letterList[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touch = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .list-item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>