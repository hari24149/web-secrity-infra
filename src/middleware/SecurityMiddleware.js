import { BaseMiddleware } from "./BaseMiddleware.js";

export class SecurityMiddleware extends BaseMiddleware {

    async handle(ctx, next) {

        console.log("Security Middleware");

        ctx.set("security", true);

        await next();

    }

}