export class SecurityContext {

    constructor() {

        this.id = crypto.randomUUID();

        this.timestamp = Date.now();

        this.request = {

            method: "",

            protocol: "",

            scheme: "",

            host: "",

            hostname: "",

            port: "",

            path: "",

            url: "",

            query: {},

            headers: {},

            cookies: {},

            body: null,

            ip: "",

            userAgent: ""

        };

        this.normalized = {

            path: "",

            query: {},

            headers: {},

            cookies: {},

            body: null

        };

        this.metadata = {

            contentType: "",

            contentLength: 0,

            encoding: "",

            isJSON: false,

            isXML: false,

            isMultipart: false

        };

        this.threats = [];

        this.score = 0;

        this.decision = "ALLOW";

    }

}