/**
 * ============================================================
 * Project Sentinel
 * Request Context
 * ============================================================
 */

export class Context {

    constructor(request, config) {

        this.request = request;

        this.config = config;

        this.response = null;

        this.user = null;

        this.logger = null;

        this.security = {};

        this.metrics = {};

        this.state = {};

        this.data = {};
        this.stopped = false;
        this.stopReason = null;

    }

    /**
     * Store temporary data
     */
    set(key, value) {

        this.data[key] = value;

    }

    /**
     * Retrieve temporary data
     */
    get(key) {

        return this.data[key];

    }

    /**
 * Stop further middleware execution.
 */
    stop(reason = "Request blocked") {
        this.stopped = true;
        this.stopReason = reason;
    }

    /**
     * Check if processing has been stopped.
     */
    isStopped() {
        return this.stopped;
    }

}