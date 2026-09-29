export interface Certification {
  id: string;
  name: string;
  provider: string;
  linkedinPostUrl?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "deloitte",
    name: "Deloitte Virtual Experience Program",
    provider: "Deloitte",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_deloitte-virtual-experience-program-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "kpmg",
    name: "KPMG Virtual Experience Program",
    provider: "KPMG",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_kpmg-virtual-experience-program-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "aws",
    name: "AWS Virtual Experience / Learning Certification",
    provider: "AWS",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_aws-certification-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "jpmorgan",
    name: "JPMorgan Chase Virtual Experience Program",
    provider: "JPMorgan Chase",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_jpmorgan-chase-virtual-experience-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "walmart",
    name: "Walmart Virtual Experience Program",
    provider: "Walmart",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_walmart-virtual-experience-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "indiaai",
    name: "IndiaAI Certification",
    provider: "IndiaAI",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_indiaai-certification-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "nptel",
    name: "NPTEL Certification",
    provider: "NPTEL",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_nptel-certification-activity-1234567890", // Replace with actual LinkedIn post URL
  },
  {
    id: "coursera",
    name: "Coursera Certification",
    provider: "Coursera",
    linkedinPostUrl: "https://www.linkedin.com/posts/gambhir-jha-424041362_coursera-certification-activity-1234567890", // Replace with actual LinkedIn post URL
  },
];
