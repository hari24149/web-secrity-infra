import { URLDecoder } from "./URLDecoder.js";
import { HTMLEntityDecoder } from "./HTMLEntityDecoder.js";
import { UnicodeNormalizer } from "./UnicodeNormalizer.js";
import { WhitespaceNormalizer } from "./WhitespaceNormalizer.js";
import { NullByteRemover } from "./NullByteRemover.js";

export class NormalizationPipeline {

    constructor() {

        this.steps = [
            new URLDecoder(),
            new HTMLEntityDecoder(),
            new UnicodeNormalizer(),
            new NullByteRemover(),
            new WhitespaceNormalizer()
        ];

    }

    normalize(value) {

        let result = value;

        for (const step of this.steps) {

            result = step.normalize(result);

        }

        return result;

    }

}