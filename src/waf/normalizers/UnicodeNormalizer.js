export class UnicodeNormalizer {

    normalize(value = "") {

        if (typeof value !== "string") {
            return value;
        }

        return value.normalize("NFKC");

    }

}