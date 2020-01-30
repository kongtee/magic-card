<template>
    <section class="app-footerbar animated slideInDown">
        <ul class="footerbar-list">
            <li>
                <a class="footerbar-item" href="tel:400-155-1911">
                    <!-- <img src="@Assets/images/telphone.png"> -->
                    <span class="footerbar-text">电话</span>
                </a>
            </li>
            <li>
                <a class="footerbar-item" href="#">
                    <!-- <img src="@Assets/images/chat.png"> -->
                    <span class="footerbar-text">在线咨询</span>
                </a>
            </li>
            <li>
                <a class="footerbar-item" href="#/">
                    <!-- <img src="@Assets/images/home.png"> -->
                    <span class="footerbar-text">主页</span>
                </a>
            </li>
            <li>
                <a class="footerbar-item" href="#">
                    <!-- <img src="@Assets/images/map.png"> -->
                    <span class="footerbar-text">地图</span>
                </a>
            </li>
            <li>
                <a class="footerbar-item" href="#">
                    <!-- <img src="@Assets/images/traffic.png"> -->
                    <span class="footerbar-text">交通指引</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<style lang="less" scoped>
    @import "../../assets/common/var";

    .app-footerbar {
        min-width: 100%;
        z-index: @maxZindex;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        background-color: #666;
        height: @footerbarHeight;
        position: fixed;
        bottom: 0;

        .footerbar-list {
            display: flex;
            justify-content: space-around;

            .footerbar-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: @footerbarHeight;
                justify-content: space-evenly;

                img {
                    width: 18px;
                    height: 18px;
                }
            }

            .footerbar-text {
                color: #fff;
            }
        }
    }
</style>

<script>
    export default {
    };
</script>
