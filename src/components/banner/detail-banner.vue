<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImgUrl" />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-count">
          <span class="iconfont icon-banner"></span>
          {{gallaryImgList.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <gallary :gallaryImgList="gallaryImgList" v-show="showGallary" @close="closeGallary"></gallary>
    </fade-animation>
  </div>
</template>

<script>
import Gallary from "@/components/gallary";
import FadeAnimation from "@/components/fade-animation";

const COMPONENT_NAME = "detail-banner";

export default {
  name: COMPONENT_NAME,
  props: {
    sightName: String,
    bannerImgUrl: String,
    gallaryImgList: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    closeGallary() {
      this.showGallary = false;
    }
  },
  components: {
    Gallary,
    FadeAnimation
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-count {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .icon-banner {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
