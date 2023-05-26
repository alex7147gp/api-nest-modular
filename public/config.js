"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("config", () => {
    return {
        dateBase: {
            name: process.env.NAME_MYSQL,
            port: process.env.PORT_MYSQL,
            host: process.env.HOST_MYSQL,
            userName: process.env.USERNAME_MYSQL,
            password: process.env.PASSWORD
        },
        apiKey: {}
    };
});
//# sourceMappingURL=config.js.map