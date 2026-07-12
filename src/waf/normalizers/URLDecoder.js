export class URLDecoder {

    normalize(value = "") {

        if (typeof value !== "string") {
            return value;
        }

        let decoded = value;

        while (true) {

            try {

                const next = decodeURIComponent(decoded);

                if (next === decoded) {
                    break;
                }

                decoded = next;

            } catch {

                break;

            }

        }

        return decoded;

    }

}   