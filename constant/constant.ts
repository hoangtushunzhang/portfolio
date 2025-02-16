import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

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
    email:"mailto:quang456a@gmail.com",
}

export const projects = [
  {title: "Blog App",
    description: "Blog App with Next.js and Typescript",
    tech: [
      {
        name: "React", icon: FaReact, color: "#61DAFB"
      },
      {
        name: "Next.js", icon: SiNextdotjs, color: "000000"
      }
      ,{
        name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
      },
      {
        name: "Typescript", icon: SiTypescript, color: "#3178C6"
      }
    ],
    image: '/projects/blogapp.png'
  },
  {title: "Courses TechDev",
    description: "Courses TechDev with Next.js and Typescript",
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
      }
    ],
    image: '/projects/courses.png'
  }
]