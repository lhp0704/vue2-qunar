<template>
    <div class="gallary" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in gallaryImgList" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
const COMPONENT_NAME = "gallary";

export default {
  name: COMPONENT_NAME,
  props: {
    gallaryImgList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container {
    overflow: inherit;
}

.gallary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;

    .wrapper {
        height: 0;
        width: 100%;
        padding-bottom: 100%;

        .gallary-img {
            width: 100%;
        }

        .swiper-pagination {
            color: #fff;
            bottom: -1rem;
        }
    }
}
</style>
