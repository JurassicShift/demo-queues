import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";
// import { WebSocketApiHandler } from 'sst/node/websocket-api';
// import { useSession } from 'sst/node/auth';
// import { Table } from "sst/node/table";

const dynamoDb = new DynamoDB.DocumentClient();

export const main: APIGatewayProxyHandler = async (event) => {
    // const params = {
    //     TableName: Table.Orders.tableName,
    //     Item: {

    //     }
    // }
    console.log("SOCKET CONNECT: ", event);

    return { statusCode: 200, body: "Connected WebSock" }
}