/**
 * ============================================================
 * Project Sentinel
 * Configuration Manager
 * ============================================================
 *
 * This class provides centralized configuration access
 * for the entire platform.
 */

export class Config {
  constructor(options = {}) {
    this.options = {
      appName: "Sentinel",
      version: "1.0.0",
      environment: "development",
      debug: true,
      port: 8787,

      ...options,
    };
  }

  /**
   * Get a configuration value.
   *
   * @param {string} key
   * @returns {*}
   */
  get(key) {
    return this.options[key];
  }

  /**
   * Set a configuration value.
   *
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    this.options[key] = value;
  }

  /**
   * Check if a configuration key exists.
   *
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return Object.prototype.hasOwnProperty.call(this.options, key);
  }

  /**
   * Return all configuration.
   */
  all() {
    return structuredClone(this.options);
  }
}