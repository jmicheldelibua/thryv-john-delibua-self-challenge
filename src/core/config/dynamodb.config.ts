import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DYNAMO_DB_CONFIG_TOKEN } from "@core/constant";
import { registerAs } from "@nestjs/config";

export const AWS_DYNAMO_DB_CONFIG: DynamoDBClientConfig = {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
    }
}

const dynamoDbConfig = registerAs(DYNAMO_DB_CONFIG_TOKEN, (): DynamoDBClientConfig => AWS_DYNAMO_DB_CONFIG);

export { dynamoDbConfig };