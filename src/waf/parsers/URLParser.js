export class URLParser {

    parse(request, context) {

        const url = new URL(request.url);

        context.request.url = request.url;
        context.request.method = request.method;

        context.request.protocol = url.protocol;
        context.request.scheme = url.protocol.replace(":", "");

        context.request.host = url.host;
        context.request.hostname = url.hostname;

        context.request.port = url.port || (
            url.protocol === "https:" ? "443" : "80"
        );

        context.request.path = url.pathname;

        context.request.query = {};

        for (const [key, value] of url.searchParams.entries()) {
            context.request.query[key] = value;
        }

    }

}