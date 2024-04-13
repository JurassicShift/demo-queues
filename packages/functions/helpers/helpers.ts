import {  DynamoDBDocType } from "../types";

export const createdAt = (): string => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    return date.toISOString();
}

export const bankingVerification = (num: number = 8) => {
    const result = Math.floor(Math.random() * 11);
    return result <= num ? true : false;
}

export const shippingVerification = (num: number) => {
    return bankingVerification(num);
}

export const messageObjFactory = async ( type: string, status: string, data: DynamoDBDocType) => {
    return {
        MessageBody: JSON.stringify({
            type: type,
            status: status,
            order_ref: data.order_ref,
            order_item: data.order_item
        })
    }
}

export const consumerRtnObj = (consumer: string, status: boolean) => {
    return {
        consumer,
        status
    }
}

export const dataAvailable = (data: DynamoDBDocType) =>{
    if(!data) {
        throw new Error("Data not available");
    }
    return data;
}
