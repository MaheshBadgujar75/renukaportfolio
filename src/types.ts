export interface Project {
  title: string;
  type: string;
  description: string[];
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    portfolio: string;
  };
  objective: string;
  summary: string;
  skills: {
    categories: {
      name: string;
      items: string[];
    }[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: {
    name: string;
    institution: string;
    duration: string;
  }[];
}
