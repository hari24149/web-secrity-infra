export const XSS_PATTERNS = [

    {
        id: "SCRIPT_TAG",
        severity: "CRITICAL",
        pattern: /<script\b[^>]*>[\s\S]*?<\/script>/i,
        description: "Script tag detected."
    },

    {
        id: "EVENT_HANDLER",
        severity: "HIGH",
        pattern: /\bon\w+\s*=/i,
        description: "Inline event handler detected."
    },

    {
        id: "JAVASCRIPT_URI",
        severity: "HIGH",
        pattern: /javascript\s*:/i,
        description: "JavaScript URI detected."
    },

    {
        id: "IFRAME",
        severity: "HIGH",
        pattern: /<iframe\b/i,
        description: "Iframe detected."
    },

    {
        id: "SVG",
        severity: "MEDIUM",
        pattern: /<svg\b/i,
        description: "SVG tag detected."
    },

    {
        id: "IMG_EVENT",
        severity: "HIGH",
        pattern: /<img\b/i,
        description: "Image tag detected."
    }

];