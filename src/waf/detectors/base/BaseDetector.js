export class BaseDetector {

    constructor(name) {
        this.name = name;
    }

    detect(context) {
        throw new Error(
            `${this.name} detector must implement detect()`
        );
    }

}