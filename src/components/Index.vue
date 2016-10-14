<template>
    <p>{{greeting}}</p>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                greeting: 'hello vue2-boilerplate-demo!!'
            };
        },
        created() {
            (async () => {
                console.log(123);
                try{
                    let res = await fetchJsonp('http://172.16.40.162:8081/data');
                    this.data = await res.json();
                }catch(e) {
                    console.log(e);
                }
                console.log(this.data);
                alert(this.data.APP[0].title);
            })();
        }
    };
</script>

<style lang="sass">
    @import '../assets/scss/flexbox';

    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>