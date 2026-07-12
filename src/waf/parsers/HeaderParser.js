export class HeaderParser {

    parse(request, context) {

        context.request.headers = {};

        for (const [key, value] of request.headers.entries()) {

            context.request.headers[key.toLowerCase()] = value;

        }

        context.request.userAgent =
            context.request.headers["user-agent"] || "";

    }

}