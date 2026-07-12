import { Config } from "../config/AppConfig.js";
import { Context } from "./Context.js";
import { MiddlewareEngine } from "../middleware/MiddlewareEngine.js";
import { ResponseEngine } from "./ResponseEngine.js";

export class Application {

    constructor(options = {}) {

        this.config = new Config(options);

        this.middleware = new MiddlewareEngine();

    }

    use(middleware) {

        this.middleware.use(middleware);

        return this;

    }

    async handle(request) {

        const ctx = new Context(request, this.config);

        try {

            await this.middleware.execute(ctx);

            if (ctx.isStopped()) {

                return ResponseEngine.forbidden(ctx.stopReason);

            }

            return ResponseEngine.ok(
                {
                    path: new URL(request.url).pathname
                },
                "Request completed successfully"
            );

        } catch (error) {

            return ResponseEngine.internal(error.message);

        }

    }

}