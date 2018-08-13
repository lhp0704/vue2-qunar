<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="list-box">
                <div class="title border-topbottom">当前城市</div>
                <div class="list-item">
                    <div class="list-item-button">
                        <div class="button">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="list-box">
                <div class="title border-topbottom">热门城市</div>
                <div class="list-item">
                    <div class="list-item-button" v-for="item in hotCityList" :key="item.id" @click="selectItem(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="list-box" v-for="(item, key) in cityList" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="list-item-wrapper">
                    <div class="child-item border-bottom" v-for="childItem in item" :key="childItem.id" @click="selectItem(childItem.name)">
                        {{childItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";

import { mapGetters, mapMutations } from "vuex";

const COMPONENT_NAME = "city-list";

export default {
  name: COMPONENT_NAME,
  props: {
    hotCityList: Array,
    cityList: Object,
    letter: String
  },
  data() {
    return {};
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  methods: {
    selectItem(item) {
      this.setCurrentCity(item);
      this.$router.push("/");
    },
    ...mapMutations({
      setCurrentCity: "SET_CURRENT_CITY"
    })
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  computed: {
    ...mapGetters(["currentCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        line-height: 0.54rem;
        background: #eee;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.26rem;
    }

    .list-item {
        overflow: hidden;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;

        .list-item-button {
            float: left;
            width: 33.33%;

            .button {
                margin: 0.1rem;
                padding: 0.1rem 0;
                text-align: center;
                border: 0.02rem solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }

    .list-item-wrapper {
        .child-item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
}
</style>