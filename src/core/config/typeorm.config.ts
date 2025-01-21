import { registerAs } from "@nestjs/config";
import { TYPE_ORM_CONFIG_TOKEN } from "@core/constant";

const config = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [],
    synchronize: process.env.NODE_ENV !== 'production',
}

const typeOrmConfig = registerAs(TYPE_ORM_CONFIG_TOKEN, () => config);

export { typeOrmConfig };