<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
const COMPONENT_NAME = "fade-animation";

export default {
  name: COMPONENT_NAME
};
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to {
    opacity: 0;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.5s;
}
</style>