export class Assert {

    static equals(actual, expected, message = "") {

        if (actual !== expected) {

            throw new Error(
                `${message}
Expected : ${expected}
Actual   : ${actual}`
            );

        }

    }

    static isTrue(value, message = "") {

        if (!value) {

            throw new Error(
                message || "Expected true"
            );

        }

    }

    static isFalse(value, message = "") {

        if (value) {

            throw new Error(
                message || "Expected false"
            );

        }

    }

    static notNull(value, message = "") {

        if (value === null || value === undefined) {

            throw new Error(
                message || "Expected value"
            );

        }

    }

}