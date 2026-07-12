// import { Application } from "./core/Application.js";

// import { LoggerMiddleware } from "./middleware/LoggerMiddleware.js";
// import { ValidationMiddleware } from "./middleware/ValidationMiddleware.js";
// import { SecurityMiddleware } from "./middleware/SecurityMiddleware.js";
// import { WAFMiddleware } from "./middleware/WAFMiddleware.js";

// const app = new Application();

// app.use(new LoggerMiddleware());
// app.use(new ValidationMiddleware());
// app.use(new SecurityMiddleware());
// app.use(new WAFMiddleware());

// // Safe request
// // const request = new Request(
// //     "https://sentinel.local/api/users"
// // );

// // Try this later:
// const request = new Request(
//     "https://sentinel.local/api/users?attack=<script>alert('XSS')</script>"
// );

// // const request = new Request(
// //     "https://sentinel.local/login?user=admin' OR 1=1--"
// // );

// // const request = new Request(
// //     "https://sentinel.local/api/users?id=10"
// // );

// const response = await app.handle(request);

// console.log(await response.text());

import { RequestParser } from "./waf/parsers/RequestParser.js";
import { RequestNormalizer } from "./waf/normalizers/RequestNormalizer.js";

const parser = new RequestParser();
const normalizer = new RequestNormalizer();

const request = new Request(

    "https://sentinel.local/api/users?name=%253Cscript%253Ealert(1)%253C/script%253E",

    {
        headers: {

            "User-Agent": "Sentinel Browser",

            "X-Test": "%253Cimg%2520src=x%2520onerror=alert(1)%253E"

        }

    }

);

let context = await parser.parse(request);

context = normalizer.normalize(context);

console.log(JSON.stringify(context.normalized, null, 4));