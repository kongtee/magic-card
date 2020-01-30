<!--
@file: 主APP引入文件
-->
<template>
    <div id="app" class="h5admin">
        <!--顶部导航-->
        <Navbar>
            <!--navbar 内容-->
            <flex-box class="hd" justify="space-between">
                <div class="title">{{title}}</div>
            </flex-box>
            <!--navbar 内容结束-->
        </Navbar>
        <!--页面内容-->
        <div class="main-content">
            <AppMain></AppMain>
        </div>
    </div>
</template>

<style lang="less">
    @import './assets/css/index';

    .h5admin {
        height: 100vh;

        .hd {
            height: 100%;
            padding: 0 15px;
            font-size: @body-font-size;

            .logo {
                // background-image: url("./assets/images/menu.png");
                background-size: 30px;
                display: block;
                width: 30px;
                height: 30px;
            }

            .back {
                // background-image: url("./assets/images/back.png");
                background-size: 30px;
                display: block;
                width: 30px;
                height: 30px;
            }

            .title {
                font-size: 18px;
                color: #fff;
                font-weight: bold;
                font-family: @body-family;
                text-align: center;
                flex: auto;
            }
        }

        .main-content {
            .flex(1);
            .flexbox();

            margin-bottom: @footerbarHeight;
        }
    }
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import {
        Navbar,
        AppMain,
    } from './components/layout/index';

    export default {
        components: {
            Navbar,
            AppMain
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters(['layout', 'title', 'path'])
        },
        methods: {
            ...mapActions(['toggleSiderbar']),
            back() {
                this.$router.go(-1)
            }
        }
    };
</script>
