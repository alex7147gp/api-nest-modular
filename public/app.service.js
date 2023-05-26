"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
let AppService = class AppService {
    constructor(apiKey, tasks, configService) {
        this.apiKey = apiKey;
        this.tasks = tasks;
        this.configService = configService;
    }
    getHello() {
        return 'Hello World!';
    }
    newEnpoint() {
        return "i am new";
    }
    newKey() {
        console.log(this.tasks);
        const nameSql = this.configService.dateBase.name;
        console.log(nameSql);
        return `this is the key: ${nameSql}`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("API_KEY")),
    __param(1, (0, common_1.Inject)("TASKS")),
    __param(2, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [String, Array, void 0])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map