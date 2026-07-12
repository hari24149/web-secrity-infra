export class WhitespaceNormalizer {

    normalize(value = "") {

        if (typeof value !== "string") {
            return value;
        }

        return value
            .replace(/\s+/g, " ")
            .trim();

    }

}