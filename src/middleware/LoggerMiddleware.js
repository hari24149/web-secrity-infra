import { BaseMiddleware } from "./BaseMiddleware.js";

export class LoggerMiddleware extends BaseMiddleware {

    async handle(ctx, next) {

        console.log("Logger Middleware");

        await next();

    }

}