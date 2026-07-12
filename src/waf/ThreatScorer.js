export class ThreatScorer {

    static evaluate(result) {

        const score = result.score;

        if (score >= 80) {
            return {
                action: "BLOCK",
                score
            };
        }

        if (score >= 40) {
            return {
                action: "LOG",
                score
            };
        }

        return {
            action: "ALLOW",
            score
        };

    }

}