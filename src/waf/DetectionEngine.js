export class DetectionEngine {

    constructor() {

        this.detectors = [];

    }

    register(detector) {

        this.detectors.push(detector);

    }

    detect(context) {

        const findings = [];

        for (const detector of this.detectors) {

            const result = detector.detect(context);

            if (Array.isArray(result)) {

                findings.push(...result);

            }

        }

        return findings;

    }

}