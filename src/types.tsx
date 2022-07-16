export declare interface Experience {
  company: string;
  website: string;
  role: string;
  duration: WorkDuration;
  languages: Array<string>;
  technologies: Array<string>;
  tools: Array<string>;
}

export declare interface WorkDuration {
  start: string;
  end: string;
}

export declare interface SiteConfig {
  name: string;
  title: string;
  experiences: Array<Experience>;
}
