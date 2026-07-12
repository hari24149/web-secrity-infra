/**
 * ============================================================
 * Project Sentinel
 * Request Pipeline
 * ============================================================
 */

export class Pipeline {

    constructor() {

        this.steps = [];

    }

    /**
     * Register a pipeline step.
     */
    use(step) {

        this.steps.push(step);

        return this;

    }

    /**
     * Execute all registered steps.
     */
    async execute(ctx) {

        for (const step of this.steps) {

            await step(ctx);

        }

        return ctx;

    }

}