<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-back"></div>
        </router-link>
    </div>
</template>

<script>
const COMPONENT_NAME = "city-header";

export default {
  name: COMPONENT_NAME,
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/variables.styl';

.header {
    position: relative;
    overflow: hidden;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: 0.32rem;

    .icon-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.64rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
    }
}
</style>