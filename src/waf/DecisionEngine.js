import { ThreatScorer } from "./ThreatScorer.js";

export class DecisionEngine {

    static decide(ruleResult) {

        const threat = ThreatScorer.evaluate(ruleResult);

        return {
            action: threat.action,
            score: threat.score,
            matches: ruleResult.matches
        };

    }

}