const Base = require('./base.js');

module.exports = class extends Base {
    async indexAction() {
        const param = {
            host: 'https://mfkp.qq.com',
            data: {
                cmd: 'card_user_mainpage',
                token: '@YIUShKi67',
                sid: 'o0079959261',
                mkfrom: 'mkqz',
                uin: '79959261'
            }
        };
        const request = this.service('request');
        console.log('logout: start');
        const res = await request.logout(param, this);
        console.log('logout: success', res);

        return this.json(res);
        // const tokenKey = this.config('token');
        // this.cookie(tokenKey, null, {
        //     domain: this.config('domain'),
        //     path: '/'
        // });
        // const username = this.config('username');
        // this.cookie(username, null, {
        //     domain: this.config('domain'),
        //     path: '/'
        // });
        // console.log('logout passportUrl:', this.config('passportUrl'));
        // this.redirect(this.config('passportUrl'));
    }
};
