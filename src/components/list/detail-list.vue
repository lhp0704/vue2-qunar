<template>
    <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="title border-bottom">
                <span class="icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="child-item">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
const COMPONENT_NAME = "detail-list";

export default {
  name: COMPONENT_NAME,
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
}

.icon {
    position: relative;
    left: 0.06rem;
    top: 0.06rem;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
}

.child-item {
    padding: 0 0.2rem;
}
</style>