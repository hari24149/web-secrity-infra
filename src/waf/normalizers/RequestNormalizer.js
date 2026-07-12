import { NormalizationPipeline } from "./NormalizationPipeline.js";

export class RequestNormalizer {

    constructor() {

        this.pipeline = new NormalizationPipeline();

    }

    normalize(context) {

        context.normalized.path =
            this.pipeline.normalize(context.request.path);

        context.normalized.body =
            this.pipeline.normalize(context.request.body);

        context.normalized.headers = {};

        for (const [key, value] of Object.entries(context.request.headers)) {

            context.normalized.headers[key] =
                this.pipeline.normalize(value);

        }

        context.normalized.cookies = {};

        for (const [key, value] of Object.entries(context.request.cookies)) {

            context.normalized.cookies[key] =
                this.pipeline.normalize(value);

        }

        context.normalized.query = {};

        for (const [key, value] of Object.entries(context.request.query)) {

            context.normalized.query[key] =
                this.pipeline.normalize(value);

        }

        return context;

    }

}