import { registerAs } from "@nestjs/config";
import { TYPE_ORM_CONFIG_TOKEN } from "@core/constant";
import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: process.env.DB_TYPE as unknown as 'mysql' | 'postgres' | 'mariadb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
    entities: ['./dist/**/*.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV !== 'production',
}

const typeOrmConfig = registerAs(TYPE_ORM_CONFIG_TOKEN, () => config);

export { typeOrmConfig };