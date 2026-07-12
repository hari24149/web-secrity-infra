import { BaseDetector } from "../base/BaseDetector.js";
import { DetectionResult } from "../base/DetectionResult.js";
import { XSS_PATTERNS } from "./XSSPatterns.js";

export class XSSDetector extends BaseDetector {

    constructor() {

        super("XSS");

    }

    detect(context) {

        const findings = [];

        this.inspectCollection(
            context.normalized.query,
            "query",
            findings
        );

        this.inspectCollection(
            context.normalized.headers,
            "header",
            findings
        );

        this.inspectCollection(
            context.normalized.cookies,
            "cookie",
            findings
        );

        if (typeof context.normalized.body === "string") {

            this.inspectValue(
                context.normalized.body,
                "body",
                "body",
                findings
            );

        }

        return findings;

    }

    inspectCollection(collection, location, findings) {

        for (const [parameter, value] of Object.entries(collection)) {

            this.inspectValue(
                value,
                location,
                parameter,
                findings
            );

        }

    }

    inspectValue(value, location, parameter, findings) {

        if (typeof value !== "string") {
            return;
        }

        for (const signature of XSS_PATTERNS) {

            if (!signature.pattern.test(value)) {
                continue;
            }

            const result = new DetectionResult();

            result.detector = this.name;
            result.category = "Cross Site Scripting";
            result.severity = signature.severity;
            result.location = location;
            result.parameter = parameter;
            result.payload = value;
            result.message = signature.description;
            result.evidence = signature.pattern.toString();
            result.tags = ["XSS", signature.id];

            findings.push(result);

        }

    }

}