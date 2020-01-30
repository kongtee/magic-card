const Base = require('./base.js');

module.exports = class extends Base {
    async indexAction() {
        const param = {
          host: "https://mfkp.qq.com",
          data: {
            cmd: this.get().cmd,
            token: "@QaL5t2M7b",
            sid: "o0079959261",
            mkfrom: "mkqz",
            uin: "79959261"
          }
        };
        const request = this.service('request');
        console.log('cardshow: start');
        const res = await request.cardshow(param, this);
        console.log('cardshow: success', res);

        return this.json(res);
    }
};
