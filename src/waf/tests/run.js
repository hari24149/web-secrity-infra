import { TestSuite }
from "./core/TestSuite.js";

import { TestRunner }
from "./core/TestRunner.js";

import { SecurityContextTest }
from "./models/SecurityContext.test.js";

const suite =
new TestSuite("Sentinel WAF Tests");

suite.add(
    new SecurityContextTest()
);

const runner =
new TestRunner();

await runner.run(suite);