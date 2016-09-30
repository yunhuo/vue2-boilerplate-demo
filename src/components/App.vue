<style>
    .newmaster {
        position: absolute;
        background: #97a0b3;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>

<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'Base',
        replace: false
    };
</script>

