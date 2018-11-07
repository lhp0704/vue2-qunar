<template>
  <div>
    <city-header></city-header>
    <city-search :cityList="cityList"></city-search>
    <city-list :hotCityList="hotCityList" :cityList="cityList" :letter="letter"></city-list>
    <city-letter-list :cityList="cityList" @select="selectItem"></city-letter-list>
  </div>
</template>

<script>
import CityHeader from "@/components/header/city-header";
import CitySearch from "@/components/search/city-search";
import CityList from "@/components/list/city-list";
import CityLetterList from "@/components/list/city-letter-list";

import { getData2 } from "@/api/getData";

export default {
  name: "city",
  data() {
    return {
      hotCityList: [],
      cityList: {},
      letter: ""
    };
  },
  mounted() {
    this.getData2();
  },
  methods: {
    getData2() {
      getData2().then(res => {
        if (res.code === 0 && res.data) {
          this.hotCityList = res.data.hotCityList;
          this.cityList = res.data.cityList;
        }
      });
    },
    selectItem(item) {
      this.letter = item;
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityLetterList
  }
};
</script>

<style>
</style>
