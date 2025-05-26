import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Prince",
  lastName: "Gaur",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer | AI Automation Specialist",
  avatar: "/images/avatar.png",
  email: "example@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights on modern web development, AI automation, and how to build intelligent 
      applications that solve real-world problems. Join me to learn about the latest in tech!
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/prince-gaur-3b8034265/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Full Stack Developer & AI Automation Specialist building modern web applications`,
  headline: <>Crafting Intelligent Web Experiences</>,
  featured: {
    display: true,
    title: <>Featured Project: <strong className="ml-4">AI-Powered Web Automation</strong></>,
    href: "/work/ai-web-automation",
  },
  subline: (
    <>
      I build modern web applications and AI automation solutions that help businesses scale.
      <br /> Specializing in React, Next.js, and intelligent automation systems.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Full Stack Developer & AI Automation Specialist building modern web applications`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/919560996293",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Prince Gaur, a Full Stack Developer and AI Automation Specialist passionate about building 
        modern web applications and intelligent automation solutions. I combine cutting-edge web technologies 
        with AI to create efficient, scalable, and user-friendly applications. My expertise spans from 
        building responsive web interfaces to developing complex AI automation systems that streamline 
        business processes.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance Developer",
        timeframe: "2022 - Present",
        role: "Full Stack Developer & AI Automation Specialist",
        achievements: [
          <>
            Developed and deployed AI-powered web applications using React, Next.js, and OpenAI's GPT, 
            resulting in 40% faster customer service response times for clients.
          </>,
          <>
            Built automated document processing systems using n8n and Make.com, reducing manual data entry 
            by 60% for multiple businesses.
          </>,
          <>
            Created custom web automation solutions using Puppeteer and Playwright, helping clients 
            automate repetitive tasks and improve operational efficiency.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Freelance project cover image 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-02.png",
            alt: "Freelance project cover image 2",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Freelance project cover image 3",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Freelance project cover image 4",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Previous Company",
        timeframe: "2020 - 2022",
        role: "Web Developer & Automation Engineer",
        achievements: [
          <>
            Led the development of a React-based admin dashboard that integrated with multiple AI services, 
            improving team productivity by 45%.
          </>,
          <>
            Implemented automated testing and deployment pipelines using GitHub Actions and Docker, 
            reducing deployment time by 70%.
          </>,
          <>
            Developed RESTful APIs and microservices using Node.js and Express, supporting high-traffic 
            web applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Your University",
        description: <>Bachelor's in Computer Science with focus on Web Technologies and AI.</>,
      },
      {
        name: "Professional Certifications",
        description: (
          <>
            • AWS Certified Developer Associate
            <br />
            • Google Cloud Professional Developer
            <br />
            • OpenAI API Specialist
            <br />
            • Advanced Web Development (Meta)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Expert in building modern, responsive web applications using:
            <br />• React.js, Next.js, TypeScript
            <br />• Tailwind CSS, Styled Components
            <br />• Redux, Context API
            <br />• Framer Motion, Three.js for animations
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/vision solar .png",
            alt: "Vision Solar Dashboard - Modern React Frontend",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Building scalable backend systems with:
            <br />• Node.js, Express, Python
            <br />• RESTful APIs, GraphQL
            <br />• MongoDB, PostgreSQL
            <br />• Docker, Kubernetes
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/vision solar2.png",
            alt: "Vision Solar Backend Architecture",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI & Automation",
        description: (
          <>
            Developing intelligent automation solutions using:
            <br />• OpenAI GPT, Gemini AI
            <br />• n8n, Make.com, Power Automate
            <br />• Puppeteer, Playwright
            <br />• Custom AI models and APIs
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/callagent.png",
            alt: "AI Call Agent - Intelligent Voice-Based Customer Service Automation",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Web development and AI automation projects by ${person.name}`,
};

export { person, social, newsletter, home, about, work };
