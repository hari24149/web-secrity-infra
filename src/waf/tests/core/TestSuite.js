export class TestSuite {

    constructor(name) {

        this.name = name;

        this.tests = [];

    }

    add(test) {

        this.tests.push(test);

    }

}