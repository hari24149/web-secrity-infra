import { BaseMiddleware } from "./BaseMiddleware.js";

export class ValidationMiddleware extends BaseMiddleware {

    async handle(ctx, next) {

        console.log("Validation Middleware");

        ctx.set("validated", true);

        await next();

    }

}