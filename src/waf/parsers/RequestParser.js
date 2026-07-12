import { SecurityContext } from "../models/SecurityContext.js";

import { URLParser } from "./URLParser.js";
import { HeaderParser } from "./HeaderParser.js";
import { CookieParser } from "./CookieParser.js";
import { BodyParser } from "./BodyParser.js";
import { MetadataParser } from "./MetadataParser.js";

export class RequestParser {

    constructor() {

        this.urlParser = new URLParser();

        this.headerParser = new HeaderParser();

        this.cookieParser = new CookieParser();

        this.bodyParser = new BodyParser();

        this.metadataParser = new MetadataParser();

    }

    async parse(request) {

        const context = new SecurityContext();

        this.urlParser.parse(request, context);

        this.headerParser.parse(request, context);

        this.cookieParser.parse(request, context);

        await this.bodyParser.parse(request, context);

        this.metadataParser.parse(request, context);

        return context;

    }

}