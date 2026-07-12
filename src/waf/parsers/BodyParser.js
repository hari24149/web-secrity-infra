export class BodyParser {

    async parse(request, context) {

        context.request.body = null;

    }

}