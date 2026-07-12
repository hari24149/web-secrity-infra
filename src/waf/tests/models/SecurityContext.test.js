import { TestCase } from "../core/TestCase.js";
import { Assert } from "../core/Assert.js";

import { SecurityContext }
from "../../models/SecurityContext.js";

export class SecurityContextTest
extends TestCase {

    constructor() {

        super("SecurityContext");

    }

    async run() {

        const context =
            new SecurityContext();

        Assert.notNull(context.id);

        Assert.notNull(context.timestamp);

        Assert.equals(
            context.score,
            0
        );

        Assert.equals(
            context.decision,
            "ALLOW"
        );

        Assert.isTrue(
            Array.isArray(context.threats)
        );

    }

}