/**
 * ============================================================
 * Project Sentinel
 * Middleware Engine
 * ============================================================
 */

export class MiddlewareEngine {

    constructor() {

        this.middlewares = [];

    }

    /**
     * Register middleware.
     */
    use(middleware) {

        this.middlewares.push(middleware);

        return this;

    }

    /**
     * Execute middleware chain.
     */
    async execute(ctx) {

        let index = -1;

        const dispatch = async (i) => {

            if (i <= index) {

                throw new Error("next() called multiple times");

            }

            index = i;
            const middleware = this.middlewares[i];

            if (!middleware) {
                return;
            }

            if (ctx.isStopped()) {
                return;
            }

            await middleware.handle(ctx, () => dispatch(i + 1));

        };

        await dispatch(0);

    }

}