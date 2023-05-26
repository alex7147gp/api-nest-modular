import { ConfigType } from "@nestjs/config";
import config from "./config";
export declare class AppService {
    private apiKey;
    private tasks;
    private configService;
    constructor(apiKey: string, tasks: any[], configService: ConfigType<typeof config>);
    getHello(): string;
    newEnpoint(): string;
    newKey(): string;
}
