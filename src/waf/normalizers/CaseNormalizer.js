export class CaseNormalizer {

    normalize(value = "") {

        if (typeof value !== "string") {
            return value;
        }

        return value.toLowerCase();

    }

}