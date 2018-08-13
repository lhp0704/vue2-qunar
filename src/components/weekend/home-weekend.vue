<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item in weekendList" :key="item.id" :to="'/detail/' + item.id">
        <div class="item-box">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
const COMPONENT_NAME = "home-weekend";

export default {
  name: COMPONENT_NAME,
  props: {
    weekendList: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl';

.weekend {
  .title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }

  .item-box {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
  }

  .item-img {
    width: 100%;
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>
