import { FaReact } from "react-icons/fa";
import { SiDrizzle, SiNextdotjs, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

export const navItems = [
  {
    name: "Project",
    href: "#work",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const socialLinks = {
  github: 'https://github.com/hoangtushunzhang',
  linkedin: 'https://www.linkedin.com/in/hoangtushun/',
  facebook: 'https://www.facebook.com/shunquang',
  email: "mailto:quang456a@gmail.com",
}

export const projects = [
  {
    title: "Blog App",
    description: "Blog App with Next.js and Typescript",
    tech: [
      {
        name: "React", icon: FaReact, color: "#61DAFB"
      },
      {
        name: "Next.js", icon: SiNextdotjs, color: "000000"
      }
      , {
        name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
      },
      {
        name: "Typescript", icon: SiTypescript, color: "#3178C6"
      },
      {
        name: "Shadcn UI", icon: SiShadcnui, color: "000000"
      },
      {
        name: "Drizzle ORM", icon: SiDrizzle, color: "green"
      },
    ],
    image: '/projects/blogapp.png'
  },
  {
    title: "TechDev Courses",
    description: "TechDev Courses with Next.js and Typescript",
    tech: [
      {
        name: "React", icon: FaReact, color: "#61DAFB"
      },
      {
        name: "Next.js", icon: SiNextdotjs, color: "000000"
      }
      ,
      {
        name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
      },
      {
        name: "Typescript", icon: SiTypescript, color: "#3178C6"
      },
      {
        name: "Shadcn UI", icon: SiShadcnui, color: "000000"
      }
    ],
    image: '/projects/courses.png'
  },
  {
    title: "AI Courses Generator",
    description: "AI Courses Generator with Next.js and Typescript",
    tech: [
      {
        name: "React", icon: FaReact, color: "#61DAFB"
      },
      {
        name: "Next.js", icon: SiNextdotjs, color: "000000"
      }
      ,
      {
        name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
      },
      {
        name: "Typescript", icon: SiTypescript, color: "#3178C6"
      },
      {
        name: "Shadcn UI", icon: SiShadcnui, color: "000000"
      },
      {
        name: "Drizzle ORM", icon: SiDrizzle, color: "green"
      },
    ],
    image: '/projects/ai-courses.png'
  }
]