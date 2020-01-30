export default [
    {
        name: '首页',
        path: '/',
        show: true,
        meta: {
            title: '魔法卡片',
            footerBar: true
        },
        component() {
            return import('@Views/home/index.vue');
        },
    }
];
