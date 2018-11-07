<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swipeList="swipeList"></home-swiper>
    <grid-pagination :iconList="iconList"></grid-pagination>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "@/components/header/home-header";
import HomeSwiper from "@/components/swiper/home-swiper";
import GridPagination from "@/components/grid-pagination";
import HomeRecommend from "@/components/recommend/home-recommend";
import HomeWeekend from "@/components/weekend/home-weekend";

import { mapGetters } from "vuex";
import { getData1 } from "@/api/getData";

export default {
  name: "home",
  data() {
    return {
      city: "",
      swipeList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.city = this.currentCity;
    this.getData1(this.city);
  },
  activated() {
    if (this.city !== this.currentCity) {
      this.city = this.currentCity;
      this.getData1(this.city);
    }
  },
  methods: {
    getData1(city) {
      getData1(city).then(res => {
        if (res.code === 0 && res.data) {
          this.swipeList = res.data.swipeList;
          this.iconList = res.data.iconList;
          this.recommendList = res.data.recommendList;
          this.weekendList = res.data.weekendList;
        }
      });
    }
  },
  computed: {
    ...mapGetters(["currentCity"])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    GridPagination,
    HomeRecommend,
    HomeWeekend
  }
};
</script>

<style>
</style>
