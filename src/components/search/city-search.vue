<template>
  <div>
    <div class="search">
      <input class="search-box" type="text" v-model="keyword" placeholder="输入城市名或拼音" />
    </div>
    <div class="result" ref="result" v-show="keyword">
      <ul>
        <li class="result-item border-bottom" v-for="item in result" :key="item.id" @click="selectItem(item.name)">
          {{item.name}}
        </li>
        <li class="result-item border-bottom" v-show="!this.result.length">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

import { mapMutations } from "vuex";

const COMPONENT_NAME = "city-search";

export default {
  name: COMPONENT_NAME,
  props: {
    cityList: Object
  },
  data() {
    return {
      keyword: "",
      result: [],
      timer: null
    };
  },
  methods: {
    selectItem(item) {
      this.setCity(item);
      this.$router.push("/");
    },
    ...mapMutations({
      setCity: "SET_CITY"
    })
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.result);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.result = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cityList) {
          this.cityList[i].forEach(val => {
            if (
              val.spell.indexOf(this.keyword) > -1 ||
              val.name.indexOf(this.keyword) > -1
            ) {
              result.push(val);
            }
          });
        }
        this.result = result;
      }, 100);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-box {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #ccc;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #ccc;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #ccc;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #ccc;
  }
}

.result {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .result-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>