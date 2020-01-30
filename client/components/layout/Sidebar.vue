<template>
    <aside class="app-sidebar" @click="toggleSiderbar()" v-if="layout.showSidebar">
        <div class="sidebar-menu">
            <header class="sidebar-title">瑞金</header>
            <ul>
                <template v-for="(item, index) in menuItems">
                    <li v-if="item.show" class="siderbar-item">
                        <a class="siderbar-item-link" v-if="!item.subs" href="javascript:void(0)" @click="jump(item.path)">{{ item.name }}</a>
                        <div v-else>
                            <div class="siderbar-item-link siderbar-menu-parent">
                                <span>{{ item.name }}</span>
                                <i class="siderbar-arrow siderbar-arrow-down"></i>
                            </div>
                            <ul class="siderbar-subitem">
                                <li v-for="sub in item.subs" v-if="sub.show">
                                    <a class="siderbar-item-link" href="javascript:void(0)" @click="jump(sub.path)">{{ sub.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </aside>
</template>

<style lang="less">
    @import "../../assets/common/var";

    .app-sidebar {
        /*box-shadow: 2px 2px 6px rgba(0, 0, 0, .3);*/
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;

        .sidebar-menu {
            height: 100%;
            background-color: #212121;
            width: 200px;

            .sidebar-title {
                background-color: #c40001;
                color: #fafafa;
                height: 70px;
                line-height: 70px;
                font-size: 24px;
                padding: 0 24px;
                font-weight: bold;
            }

            .siderbar-item {
                .siderbar-item-link {
                    color: #bdbdbd;
                    height: 56px;
                    line-height: 56px;
                    padding: 0 32px;
                    display: block;
                    font-size: 16px;
                }

                .siderbar-menu-parent {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .siderbar-arrow {
                        background-size: 20px;
                        width: 20px;
                        height: 20px;
                    }

                    .siderbar-arrow-down {
                        // background-image: url('../../assets/images/arrow_down.png');
                    }

                    .siderbar-arrow-up {
                        // background-image: url('../../assets/images/arrow_up.png');
                    }
                }

                .siderbar-subitem {
                    padding: 0 18px;
                }
            }
        }
    }
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        components: {},
        props: {
            show: Boolean
        },
        data() {
            return {
                isReady: false
            };
        },
        computed: {
            ...mapGetters([
                'layout',
                'menuItems'
            ])
        },
        methods: {
            ...mapActions(['toggleSiderbar']),
            jump(path) {
                this.$router.push({
                    path: path
                });
            }
        }
    };
</script>
