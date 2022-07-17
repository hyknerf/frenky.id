export declare interface DevStacks {
  languages: Array<string>;
  technologies: Array<string>;
  tools: Array<string>;
}

export declare interface Experience {
  company: string;
  website: string;
  role: string;
  description: string;
  duration: WorkDuration;
  devStacks: DevStacks;
  projects: Array<string>;
}

export declare interface WorkDuration {
  start: string;
  end: string;
}

export declare interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  hashnode?: string;
}

export declare interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  socialLinks: SocialLinks;
  experiences: Array<Experience>;
  currentInterest: Array<string>;
}
