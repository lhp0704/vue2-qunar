<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImgUrl="bannerImgUrl" :gallaryImgList="gallaryImgList"></detail-banner>
    <detail-header></detail-header>
    <div class="list-box">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "@/components/banner/detail-banner";
import DetailHeader from "@/components/header/detail-header";
import DetailList from "@/components/list/detail-list";

import { getData3 } from "@/api/getData";

export default {
  name: "detail",
  data() {
    return {
      sightName: "",
      bannerImgUrl: "",
      gallaryImgList: [],
      categoryList: []
    };
  },
  mounted() {
    this.getData3(this.$route.params.id);
  },
  methods: {
    getData3(id) {
      getData3(id).then(res => {
        if (res.code === 0 && res.data) {
          this.sightName = res.data.sightName;
          this.bannerImgUrl = res.data.bannerImgUrl;
          this.gallaryImgList = res.data.gallaryImgList;
          this.categoryList = res.data.categoryList;
        }
      });
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>

<style lang="stylus" scoped>
.list-box {
  height: 50rem;
}
</style>
