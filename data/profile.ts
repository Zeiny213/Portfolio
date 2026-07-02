import { Bot, BrainCircuit, Code2, Database, GraduationCap, LineChart, Mail, MapPin, Rocket, Wrench } from "lucide-react";

export const profile = {
  name: "Ziad Tamer Kamal El-Zeiny",
  shortName: "Ziad Tamer",
  headline: "Artificial Intelligence Student | Intelligent Systems Specialization",
  location: "Damietta, Egypt",
  email: "zzeiny59@gmail.com",
  phone: "01094297902",
  cvPath: "/Ziad_Tamer_CV.pdf",
  imagePath: "/ziad-tamer-profile.jpeg",
  summary:
    "Artificial Intelligence student at the Arab Academy for Science, Technology & Maritime Transport, specializing in Intelligent Systems. I have a strong academic foundation in machine learning, deep learning, computer vision, NLP, robotics, and IoT, with practical experience applying Python and AI frameworks to real-world and competition-based problems.",
  intro:
    "I am building practical experience across AI, machine learning, data science, computer vision, robotics, and intelligent systems. My background includes autonomous robotics competitions, algorithm development, and applied problem-solving under real deadlines.",
  seeking: "Open to AI, Machine Learning, Data Science, Computer Vision, Robotics, and Intelligent Systems internship opportunities.",
  links: {
    github: "https://github.com/Zeiny213",
    linkedin: "https://linkedin.com/in/ziad-tamer-001959294"
  }
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  { title: "Programming Languages", icon: Code2, skills: ["Python", "C", "C++", "Java"] },
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Reinforcement Learning", "Intelligent Systems"]
  },
  { title: "Data Science", icon: LineChart, skills: ["Probability & Statistics", "Linear Algebra", "Regression Analysis", "Data Analysis"] },
  { title: "Computer Vision & Robotics", icon: Bot, skills: ["Computer Vision", "Robotics", "Autonomous Robot Control", "Sensor Integration", "Embedded Systems", "IoT"] },
  { title: "Tools & Frameworks", icon: Wrench, skills: ["Jupyter Notebook", "Google Colab", "Visual Studio Code", "Unity", "Webots"] },
  { title: "Web, Databases & Other", icon: Database, skills: ["HTML", "CSS", "JavaScript", "MySQL", "GitHub"] }
];

export const projects = [
  {
    title: "FIRST LEGO League Autonomous Competition Robot",
    type: "Robotics / Intelligent Systems",
    period: "2022",
    problem:
      "Design a reliable autonomous robot capable of completing timed competition missions with consistent mechanical performance.",
    built:
      "Designed, built, and customized the robot from scratch, iterating through multiple structural configurations to improve challenge performance and robot-run reliability.",
    technologies: ["Robotics", "Mechanical Design", "Autonomous Systems", "Team Problem-Solving"],
    outcome: "Contributed directly to a 1st Place Robot Performance finish at FIRST LEGO League.",
    link: null
  },
  {
    title: "RoboCup Autonomous Robot Control & Sensor Integration",
    type: "Robotics / Python & C++",
    period: "2023",
    problem:
      "Implement decision logic and sensor-based behavior for autonomous robot performance across competition rounds.",
    built:
      "Developed and debugged robot control code, supported real-time decision logic, and helped coordinate software behavior with team strategy and robot modules.",
    technologies: ["Python", "C++", "Sensor Integration", "Decision Logic", "Autonomous Robotics"],
    outcome: "Supported a 5-member team and contributed to a 3rd Place national finish at RoboCup.",
    link: null
  }
];

export const education = {
  institution: "Arab Academy for Science, Technology & Maritime Transport",
  degree: "Bachelor of Science in Artificial Intelligence — Intelligent Systems",
  status: "3rd Year, 6th Semester",
  location: "New Alamein, Egypt",
  expected: "Expected 2027",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Advanced IoT",
    "Robotics",
    "Embedded Systems",
    "Data Structures",
    "Algorithms",
    "Probability & Statistics",
    "Linear Algebra"
  ]
};

export const experience = [
  {
    role: "Robot Designer",
    organization: "FIRST LEGO League (FLL)",
    date: "2022",
    icon: Rocket,
    highlights: [
      "Designed and customized a competition robot from scratch, testing multiple structural approaches to improve mission performance.",
      "Collaborated with a 4-member team to troubleshoot mechanical issues and implement design improvements under competition deadlines.",
      "Helped the team achieve 1st Place in Robot Performance."
    ]
  },
  {
    role: "Team Member / Code Builder",
    organization: "RoboCup",
    date: "2023",
    icon: Bot,
    highlights: [
      "Developed and debugged autonomous robot control code in Python and C++.",
      "Implemented decision logic and sensor integration for real-time competition performance.",
      "Supported team strategy and inter-module coordination, contributing to a 3rd Place national finish."
    ]
  }
];

export const certificates = [
  { name: "FIRST LEGO League Challenge Awards – Cargo Connect", provider: "Bibliotheca Alexandrina, Egypt", date: "2021–2022" },
  { name: "RoboCupJunior Egypt 2024 – Rescue Simulation", provider: "Arab Academy for Science and Technology, Egypt", date: "2024" },
  { name: "FIRST LEGO League Challenge – Replay", provider: "Bibliotheca Alexandrina & TechnoFuture, Egypt", date: "May 2021" },
  { name: "IELTS Academic – Overall Band Score 6.0, CEFR Level B2", provider: "British Council / IDP / Cambridge", date: "2024" },
  { name: "Arab Open Robotics Championship – Participation Certificate", provider: "Egypt", date: "2022" },
  { name: "Google Advanced Data Analytics – Regression Analysis: Simplify Complex Data Relationships", provider: "Google", date: "" }
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
  { label: "Education", value: "B.Sc. Artificial Intelligence", href: "#education", icon: GraduationCap }
];