/**
 * ============================================================
 * Project Sentinel
 * Base Middleware
 * ============================================================
 */

export class BaseMiddleware {

    async handle(ctx, next) {

        return next();

    }

}