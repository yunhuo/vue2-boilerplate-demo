<script>

    export default {
        name: 'Index',
        data() {
            return {
                greeting: 'hello vue2!'
            }
        },
        render(h) {
            return (
                <p>{this.greeting}</p>
            );
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