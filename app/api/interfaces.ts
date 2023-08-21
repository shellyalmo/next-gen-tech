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

/**
 * Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04
 */
export type Iso8601 = string;

export interface IResumeSchema {
  "candidate Info"?: {
    name?: string;
    /**
     * e.g. Web Developer
     */
    title?: string;
    /**
     * Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
     */
    phone?: string;
    /**
     * Specify any number of social networks that you participate in
     */
    profiles?: {
      /**
       * e.g. Github
       */
      network?: string;
      /**
       * e.g. neutralthoughts
       */
      username?: string;
      /**
       * e.g. http://github.example.com/neutralthoughts
       */
      url?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  work?: {
    /**
     * e.g. Facebook
     */
    name?: string;
    /**
     * e.g. Software Engineer
     */
    position?: string;
    startDate?: Iso8601;
    endDate?: Iso8601;
    /**
     * Give an overview of your responsibilities at the company
     */
    summary?: string;
    /**
     * Specify multiple accomplishments
     */
    highlights?: string[];
    [k: string]: unknown;
  }[];
  education?: {
    /**
     * e.g. Massachusetts Institute of Technology
     */
    institution?: string;
    /**
     * e.g. Arts
     */
    area?: string;
    /**
     * e.g. Bachelor
     */
    studyType?: string;
    startDate?: Iso8601;
    endDate?: Iso8601;
    /**
     * grade point average, e.g. 3.67/4.0
     */
    score?: string;
    /**
     * List notable courses/subjects
     */
    courses?: string[];
    [k: string]: unknown;
  }[];
  /**
   * List out your professional skill-set
   */
  skills?: {
    /**
     * e.g. Web Development
     */
    name?: string;
    /**
     * List some keywords pertaining to this skill
     */
    keywords?: string[];
    [k: string]: unknown;
  }[];
  /**
   * Specify career projects
   */
  projects?: {
    /**
     * e.g. Twitter App Clone
     */
    name?: string;
    /**
     * Frontend and Backend for Twitter
     */
    description?: string;
    /**
     * Specify multiple features
     */
    highlights?: string[];
    /**
     * Specify special elements involved
     */
    keywords?: string[];
    /**
     * e.g. http://www.mytwitter.com
     */
    url?: string;
    [k: string]: unknown;
  }[];
  volunteer?: {
    /**
     * e.g. shecodes
     */
    organization?: string;
    /**
     * e.g. branch manager
     */
    position?: string;
    startDate?: Iso8601;
    endDate?: Iso8601;
    /**
     * Specify accomplishments and achievements
     */
    highlights?: string[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
