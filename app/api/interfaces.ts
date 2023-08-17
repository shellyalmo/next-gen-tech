export interface IJobSchema {
  "Job Info": {
    /**
     * e.g. Web Developer
     */
    title?: string;
    /**
     * e.g. Facebook
     */
    company?: string;
    /**
     * e.g. Tel Aviv, Israel
     */
    location?: string;
    /**
     * Position's official link
     */
    url?: string;
    /**
     * Write a short paragraph about the position
     */
    "job description"?: string;
    [k: string]: unknown;
  };
  /**
   * List out the required professional skill-set for this position
   */
  skills?: {
    /**
     * e.g. Web Development
     */
    name?: string;
    /**
     * e.g. Master
     */
    level?: string;
    /**
     * List some keywords pertaining to this skill
     */
    keywords?: string[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
