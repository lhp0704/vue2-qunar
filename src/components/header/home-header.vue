<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back"></div>
        </div>
        <div class="search">
            <span class="iconfont icon-search"></span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont icon-arrow"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
const COMPONENT_NAME = "home-header";

export default {
  name: COMPONENT_NAME,
  props: {
    city: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.header {
    display: flex;
    line-height: 0.86rem;
    background: $bgColor;
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;

        .icon-back {
            text-align: center;
            font-size: 0.4rem;
        }
    }

    .search {
        flex: 1;
        height: 0.64rem;
        line-height: 0.64rem;
        margin-top: 0.1rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        color: #ccc;
    }

    .header-right {
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        color: #fff;

        .icon-arrow {
            margin-left: -0.04rem;
            font-size: 0.24rem;
        }
    }
}
</style>
