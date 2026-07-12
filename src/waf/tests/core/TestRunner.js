export class TestRunner {

    async run(suite) {

        let passed = 0;
        let failed = 0;

        console.log("");
        console.log("=================================");
        console.log(`Running ${suite.name}`);
        console.log("=================================");
        console.log("");

        for (const test of suite.tests) {

            try {

                await test.run();

                console.log(`✓ ${test.name}`);

                passed++;

            }

            catch (error) {

                console.log(`✗ ${test.name}`);

                console.log(error.message);

                failed++;

            }

        }

        console.log("");
        console.log("=================================");
        console.log(`Passed : ${passed}`);
        console.log(`Failed : ${failed}`);
        console.log("=================================");

    }

}