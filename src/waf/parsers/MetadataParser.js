export class MetadataParser {

    parse(request, context) {

        context.metadata.contentType =
            request.headers.get("content-type") || "";

        context.metadata.contentLength =
            Number(request.headers.get("content-length")) || 0;

        context.metadata.encoding =
            request.headers.get("content-encoding") || "";

        const type = context.metadata.contentType.toLowerCase();

        context.metadata.isJSON =
            type.includes("application/json");

        context.metadata.isXML =
            type.includes("application/xml") ||
            type.includes("text/xml");

        context.metadata.isMultipart =
            type.includes("multipart/form-data");

    }

}