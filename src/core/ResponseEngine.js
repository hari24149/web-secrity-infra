/**
 * ============================================================
 * Project Sentinel
 * Response Engine
 * ============================================================
 */

export class ResponseEngine {
    /**
     * Create a JSON response.
     */
    static json(body, status = 200, headers = {}) {
        return new Response(
            JSON.stringify(body, null, 2),
            {
                status,
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                }
            }
        );
    }

    /**
     * Success Response
     */
    static ok(data = {}, message = "OK") {
        return this.json({
            success: true,
            status: 200,
            message,
            data
        }, 200);
    }

    /**
     * Created Response
     */
    static created(data = {}, message = "Created") {
        return this.json({
            success: true,
            status: 201,
            message,
            data
        }, 201);
    }

    /**
     * Bad Request
     */
    static badRequest(message = "Bad Request") {
        return this.json({
            success: false,
            status: 400,
            message
        }, 400);
    }

    /**
     * Unauthorized
     */
    static unauthorized(message = "Unauthorized") {
        return this.json({
            success: false,
            status: 401,
            message
        }, 401);
    }

    /**
     * Forbidden
     */
    static forbidden(message = "Forbidden") {
        return this.json({
            success: false,
            status: 403,
            message
        }, 403);
    }

    /**
     * Not Found
     */
    static notFound(message = "Not Found") {
        return this.json({
            success: false,
            status: 404,
            message
        }, 404);
    }

    /**
     * Internal Server Error
     */
    static internal(message = "Internal Server Error") {
        return this.json({
            success: false,
            status: 500,
            message
        }, 500);
    }
}