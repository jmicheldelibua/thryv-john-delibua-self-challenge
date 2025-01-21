import { registerAs } from "@nestjs/config";
import { TYPE_ORM_CONFIG_TOKEN } from "@core/constant";

const config = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: (process.env.DB_PORT || 3306) as number,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'taskmanager',
    entities: [],
    synchronize: process.env.NODE_ENV !== 'production',
}

const typeOrmConfig = registerAs(TYPE_ORM_CONFIG_TOKEN, () => config);

export { typeOrmConfig };