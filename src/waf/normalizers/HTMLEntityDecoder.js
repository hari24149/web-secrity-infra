export class HTMLEntityDecoder {

    normalize(value = "") {

        if (typeof value !== "string") {
            return value;
        }

        return value
            .replace(/&lt;/gi, "<")
            .replace(/&gt;/gi, ">")
            .replace(/&amp;/gi, "&")
            .replace(/&quot;/gi, "\"")
            .replace(/&#39;/gi, "'")
            .replace(/&#60;/gi, "<")
            .replace(/&#62;/gi, ">");

    }

}