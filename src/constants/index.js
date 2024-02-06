import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ruby,
  cpp,
  python,
  qualcomm,
  metaverse,
  pricepatrol,
  quillcraft,
  flexflow,
  potnis,
  vinamra,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Musician",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Qualcomm India",
    icon: qualcomm,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Designed and implemented a Decision Tree Classifier model to improve the performance of the GPU",
      "Took a lead role in the development of automated scripts specifically designed to collect GPU Scope data from user-provided files, ultimately resulting in a more efficient and less manual-intensive data processing pipeline",
      "Conducted comprehensive testing and validation of scripts to ensure project reliability and collaboration",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "When Abhinav puts his mind into anything, the outcomes are always fantastic ! I have seen him at work and the dedication he has is commendable ! Plus, he is an Awesome Drummer !",
    name: "Yash Potnis",
    designation: "Management Trainee",
    company: "ICICI Bank",
    image: potnis,
  },
  {
    testimonial:
      "If you're looking for a techie with remarkable soft skills who's really social, Abhi is your guy. His passion for food and sense of humor are so dazzling that if not better, it would be at par with his intelligence",
    name: "Vinamra Parakh",
    designation: "Software Engineering Intern",
    company: "Amazon",
    image: vinamra,
  },
];

const projects = [
  {
    name: "Metaverse Madness",
    description:
      "Immerse yourself in the essence of the metaverse through visually stunning aesthetics, paving the way for a captivating virtual experience without any functionality compromises.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Abhinav158/Metaverse",
  },
  {
    name: "Price Patrol",
    description:
      "Revolutionizing your shopping experience - Enter an Amazon product link, and this will tirelessly monitor its price, sending you instant alerts when it drops so you never miss out on the best deals!",
    tags: [
      {
        name: "web-scraping",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pricepatrol,
    source_code_link: "https://github.com/Abhinav158/PricePatrol.git",
  },
  {
    name: "QuillCraft",
    description:
      "Elevate your reading experience - explore a curated selection of trending and featured blogs, offering a seamless platform to discover captivating content at your fingertips.",
    tags: [
      {
        name: "graphql",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quillcraft,
    source_code_link: "https://github.com/Abhinav158/quillcraft.git",
  },
  {
    name: "FlexFlow",
    description:
      "Your personalized journey to a fitter and healthier you! Track your workouts with ease, log every step, and see your progress unfold in sleek, motivating visuals.",
    tags: [
      {
        name: "ruby-on-rails",
        color: "blue-text-gradient",
      },
      {
        name: "web-development",
        color: "green-text-gradient",
      },
      
    ],
    image: flexflow,
    source_code_link: "https://github.com/Abhinav158/activity-tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
