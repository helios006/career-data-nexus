
import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "San Francisco, CA (Remote)",
    salary: "$90,000 - $120,000",
    description: "We're looking for a passionate Frontend Developer to join our growing team. You'll be responsible for building user interfaces for our web applications, ensuring they are responsive, accessible, and provide an excellent user experience.",
    requirements: [
      "3+ years of experience with React or Vue.js",
      "Strong knowledge of HTML, CSS, and JavaScript",
      "Experience with responsive design",
      "Understanding of web accessibility standards",
      "Familiarity with RESTful APIs"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-10",
    companyLogo: "https://placehold.co/50x50?text=TN",
    sourceWebsite: "TechCareers",
    applicationUrl: "#/job/1"
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataCloud Systems",
    location: "New York, NY",
    salary: "$100,000 - $140,000",
    description: "DataCloud Systems is seeking a skilled Backend Engineer to develop and maintain our server-side applications. You'll work with databases, APIs, and cloud infrastructure to ensure our systems are scalable, secure, and performant.",
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency in Python, Java, or Node.js",
      "Experience with SQL and NoSQL databases",
      "Knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Understanding of microservices architecture"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-12",
    companyLogo: "https://placehold.co/50x50?text=DC",
    sourceWebsite: "JobHub",
    applicationUrl: "#/job/2"
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeVision Studios",
    location: "Austin, TX (Hybrid)",
    salary: "$75,000 - $95,000",
    description: "Join our creative team as a UX/UI Designer to create intuitive and visually appealing user experiences for our digital products. You'll collaborate with product managers, developers, and other stakeholders to design solutions that meet user needs.",
    requirements: [
      "2+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma or Adobe XD",
      "Portfolio demonstrating user-centered design process",
      "Experience conducting user research",
      "Understanding of design systems"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-14",
    companyLogo: "https://placehold.co/50x50?text=CV",
    sourceWebsite: "DesignJobs",
    applicationUrl: "#/job/3"
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Remote",
    salary: "$110,000 - $150,000",
    description: "AnalyticsPro is looking for a Data Scientist to help us extract insights from complex datasets. You'll develop machine learning models, perform statistical analyses, and communicate findings to non-technical stakeholders.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "Experience with Python and data science libraries",
      "Knowledge of machine learning algorithms",
      "Strong statistical background",
      "Excellent communication skills"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-08",
    companyLogo: "https://placehold.co/50x50?text=AP",
    sourceWebsite: "DataJobs",
    applicationUrl: "#/job/4"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudNine Technologies",
    location: "Seattle, WA",
    salary: "$95,000 - $130,000",
    description: "As a DevOps Engineer at CloudNine, you'll be responsible for building and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring our deployment processes are efficient and reliable.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Strong knowledge of containerization technologies",
      "Experience with infrastructure as code",
      "Familiarity with monitoring and logging tools",
      "Understanding of security best practices"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-13",
    companyLogo: "https://placehold.co/50x50?text=CN",
    sourceWebsite: "TechHire",
    applicationUrl: "#/job/5"
  },
  {
    id: "6",
    title: "Project Manager",
    company: "Innovate Solutions",
    location: "Chicago, IL (Hybrid)",
    salary: "$85,000 - $110,000",
    description: "We're seeking an experienced Project Manager to lead cross-functional teams and ensure the successful delivery of our technology projects. You'll be responsible for planning, execution, and stakeholder communication.",
    requirements: [
      "5+ years of project management experience in tech",
      "PMP certification preferred",
      "Experience with Agile methodologies",
      "Strong leadership and communication skills",
      "Ability to manage multiple projects simultaneously"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-09",
    companyLogo: "https://placehold.co/50x50?text=IS",
    sourceWebsite: "ProjectManagementHub",
    applicationUrl: "#/job/6"
  },
  {
    id: "7",
    title: "QA Engineer",
    company: "QualityTech",
    location: "Remote",
    salary: "$70,000 - $90,000",
    description: "Join our QA team to ensure the quality and reliability of our software products. You'll design and execute test plans, automate testing processes, and collaborate with developers to fix issues.",
    requirements: [
      "2+ years of experience in software testing",
      "Knowledge of test automation frameworks",
      "Experience with manual and automated testing",
      "Understanding of CI/CD pipelines",
      "Strong attention to detail"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-15",
    companyLogo: "https://placehold.co/50x50?text=QT",
    sourceWebsite: "TestingJobs",
    applicationUrl: "#/job/7"
  },
  {
    id: "8",
    title: "Marketing Specialist",
    company: "GrowthBoost",
    location: "Los Angeles, CA",
    salary: "$60,000 - $80,000",
    description: "GrowthBoost is looking for a Marketing Specialist to join our team. You'll develop and implement marketing strategies, create content, and analyze campaign performance to drive business growth.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Proficiency with marketing automation tools",
      "Experience with social media management",
      "Knowledge of SEO and SEM",
      "Strong analytical skills"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-11",
    companyLogo: "https://placehold.co/50x50?text=GB",
    sourceWebsite: "MarketingCareers",
    applicationUrl: "#/job/8"
  },
  {
    id: "9",
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Boston, MA (Hybrid)",
    salary: "$85,000 - $115,000",
    description: "AppWorks is seeking a talented Mobile Developer to create innovative mobile applications for iOS and Android platforms. You'll be responsible for the full development lifecycle, from concept to deployment.",
    requirements: [
      "3+ years of experience in mobile development",
      "Proficiency with Swift or Kotlin",
      "Experience with React Native or Flutter a plus",
      "Understanding of mobile UI/UX principles",
      "Knowledge of app store submission processes"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-07",
    companyLogo: "https://placehold.co/50x50?text=AW",
    sourceWebsite: "MobileDev",
    applicationUrl: "#/job/9"
  },
  {
    id: "10",
    title: "IT Support Specialist",
    company: "TechHelp Solutions",
    location: "Denver, CO",
    salary: "$50,000 - $65,000",
    description: "As an IT Support Specialist at TechHelp, you'll provide technical assistance to our clients, troubleshoot hardware and software issues, and ensure smooth operation of IT systems.",
    requirements: [
      "2+ years of experience in IT support",
      "Knowledge of Windows and Mac operating systems",
      "Experience with troubleshooting common IT issues",
      "Understanding of networking concepts",
      "Excellent customer service skills"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-05",
    companyLogo: "https://placehold.co/50x50?text=TH",
    sourceWebsite: "ITJobs",
    applicationUrl: "#/job/10"
  },
  {
    id: "11",
    title: "Content Writer",
    company: "WordCraft Media",
    location: "Remote",
    salary: "$45,000 - $65,000",
    description: "WordCraft Media is looking for a talented Content Writer to create engaging content for various digital platforms. You'll research topics, write articles, blog posts, and social media content, and ensure all content aligns with our clients' brand voice.",
    requirements: [
      "2+ years of content writing experience",
      "Excellent grammar and writing skills",
      "Experience with SEO best practices",
      "Ability to write for different audiences",
      "Portfolio of published work"
    ],
    jobType: "Part-time",
    datePosted: "2025-04-13",
    companyLogo: "https://placehold.co/50x50?text=WC",
    sourceWebsite: "ContentJobs",
    applicationUrl: "#/job/11"
  },
  {
    id: "12",
    title: "Cybersecurity Analyst",
    company: "SecureDefend",
    location: "Washington, DC",
    salary: "$90,000 - $120,000",
    description: "Join our cybersecurity team to protect our organization from digital threats. You'll monitor security systems, investigate incidents, implement security measures, and ensure compliance with security policies.",
    requirements: [
      "3+ years of experience in cybersecurity",
      "Security certifications (CISSP, CEH, etc.)",
      "Experience with security tools and frameworks",
      "Knowledge of threat detection and incident response",
      "Understanding of compliance requirements"
    ],
    jobType: "Full-time",
    datePosted: "2025-04-10",
    companyLogo: "https://placehold.co/50x50?text=SD",
    sourceWebsite: "SecurityJobs",
    applicationUrl: "#/job/12"
  }
];
