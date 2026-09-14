import { Award, Bot, BrainCircuit, Code2, Database, GraduationCap, Languages, Mail, MapPin, Phone, Wrench } from "lucide-react";

export const profile = {
  name: "Ziad Tamer Kamal El-Zeiny",
  shortName: "Ziad Tamer",
  headline: "Artificial Intelligence Student | Intelligent Systems Specialization",
  location: "Damietta, Egypt",
  email: "zzeiny59@gmail.com",
  phone: "01094297902",
  cvPath: "/Ziad-Tamer-El-Zeiny-CV.docx",
  imagePath: "/ziad-tamer-profile.jpeg",
  summary:
    "Artificial Intelligence student at the Arab Academy for Science, Technology & Maritime Transport, specializing in Intelligent Systems. I have hands-on experience in machine learning, deep learning, reinforcement learning, computer vision, and robotics through projects built with Python, TensorFlow, NumPy, Gymnasium, Streamlit, and Webots.",
  intro:
    "I build and audit AI systems through coursework and projects. My work includes reinforcement learning algorithm comparisons, experimental robot navigation, and patient-aware data validation for a mammography classification workflow.",
  seeking: "Seeking an entry-level internship in AI, Machine Learning, Data Science, or Robotics.",
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
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  { title: "Programming Languages", icon: Code2, skills: ["Python", "C", "C++", "Java"] },
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Neural Networks", "Reinforcement Learning", "Intelligent Systems"]
  },
  { title: "Robotics & IoT", icon: Bot, skills: ["Robotics", "IoT", "Webots", "Unity"] },
  { title: "Libraries & Frameworks", icon: Wrench, skills: ["TensorFlow", "Keras", "NumPy", "pandas", "scikit-learn", "Pillow", "Matplotlib", "Gymnasium", "Streamlit", "PyYAML", "PyTest"] },
  { title: "Web & Database", icon: Database, skills: ["HTML", "CSS", "JavaScript", "MySQL"] },
  { title: "Tools & Languages", icon: Languages, skills: ["Jupyter Notebook", "Google Colab", "Visual Studio Code", "Arabic (Native)", "English (Fluent)"] }
];

export const projects = [
  {
    title: "Reinforcement Learning Algorithm Comparison",
    subtitle: "Taxi-v4 and Webots Navigation",
    type: "Reinforcement Learning / Robotics",
    status: "Repository available",
    problem:
      "Compare tabular reinforcement learning algorithms in a controlled environment and explore how the same ideas can connect with robot navigation.",
    built:
      "Implemented Q-learning, SARSA, and First-Visit Monte Carlo from scratch, then added configurable training, evaluation, telemetry, visualization, and an experimental Webots e-puck simulation.",
    outcome:
      "Evaluates success rate, reward, steps, and training time, with PyTest coverage for update logic, configuration loading, and reproducibility.",
    technologies: ["Python", "NumPy", "Gymnasium", "Webots", "PyYAML", "Matplotlib", "PyTest"],
    link: "https://github.com/Zeiny213/reinforcement-learning-taxi-webots"
  },
  {
    title: "Patient-Aware Mammography Classification",
    subtitle: "Data Integrity Audit and Research Pipeline",
    type: "Deep Learning / Computer Vision",
    status: "Evaluation pending: data integrity blocker",
    problem:
      "Repair a historical mammography classification project while preventing patient and duplicate-image leakage from producing misleading evaluation claims.",
    built:
      "Implemented fail-closed duplicate-label validation, deterministic patient-grouped splitting, shared image preprocessing, model-input validation, lightweight tests, and a non-clinical Streamlit research interface.",
    outcome:
      "The audit found patient overlap and 742 byte-identical cross-split image groups with conflicting labels. The workflow now rejects the corrupt data by default; model performance remains unverified pending an authoritative dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "NumPy", "Pillow", "Streamlit", "Unit Testing"],
    link: "https://github.com/Zeiny213/patient-aware-mammography-classification"
  }
];

export const education = {
  institution: "Arab Academy for Science, Technology & Maritime Transport",
  degree: "Bachelor of Science in Artificial Intelligence — Intelligent Systems",
  status: "4th Year, 7th Semester",
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

export const honors = [
  {
    title: "1st Place, Robot Performance",
    organization: "FIRST LEGO League",
    date: "2022",
    icon: Award
  },
  {
    title: "3rd Place, National Finish",
    organization: "RoboCup",
    date: "2023",
    icon: Award
  },
  {
    title: "Challenge Award - Cargo Connect",
    organization: "FIRST LEGO League, Bibliotheca Alexandrina",
    date: "2021-2022",
    icon: Award
  },
  {
    title: "Challenge - Replay",
    organization: "FIRST LEGO League, Bibliotheca Alexandrina & TechnoFuture",
    date: "May 2021",
    icon: Award
  },
  {
    title: "Participation Certificate",
    organization: "Arab Open Robotics Championship, Egypt",
    date: "2022",
    icon: Award
  }
];

export const certificates = [
  { name: "RoboCupJunior Egypt 2024 - Rescue Simulation", provider: "Arab Academy for Science and Technology, Egypt", date: "2024" },
  { name: "IELTS Academic - Overall Band Score 6.0, CEFR Level B2", provider: "British Council / IDP / Cambridge", date: "2024" },
  { name: "Regression Analysis: Simplify Complex Data Relationships", provider: "Google Advanced Data Analytics", date: "" }
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
  { label: "Education", value: "B.Sc. Artificial Intelligence", href: "#education", icon: GraduationCap }
];
