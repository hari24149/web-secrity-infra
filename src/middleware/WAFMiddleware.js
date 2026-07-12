import { BaseMiddleware } from "./BaseMiddleware.js";
import { XSSRule } from "../rules/Security_Engine/XSSRule.js";
import { RuleEngine } from "../rules/RuleEngine.js";
import { SQLInjectionRule } from "../rules/Security_Engine/SQLInjectionRule.js";

export class WAFMiddleware extends BaseMiddleware {

    constructor() {

        super();

        this.ruleEngine = new RuleEngine();
        this.ruleEngine.use(new SQLInjectionRule());
        this.ruleEngine.use(new XSSRule());

    }
    async handle(ctx, next) {

        console.log("WAF Middleware");

        const result = this.ruleEngine.inspect(ctx);

        const { DecisionEngine } = await import("../waf/DecisionEngine.js");

        const decision = DecisionEngine.decide(result);

        console.log("Threat Score :", decision.score);
        console.log("Action       :", decision.action);

        switch (decision.action) {

            case "ALLOW":

                return await next();

            case "LOG":

                console.log("⚠ Suspicious Request");

                return await next();

            case "CHALLENGE":

                ctx.stop("Challenge required.");

                return;

            case "BLOCK":

                console.log("🚨 Request Blocked");

                ctx.stop(decision.matches[0].message);

                return;

        }

    }

}