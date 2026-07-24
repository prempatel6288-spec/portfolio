import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Copy,
  Check,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
} from "lucide-react";
import { SiDiscord } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import esyaLogo from "@/assets/esya-logo.jpg";
import uoftLogo from "@/assets/university-of-toronto-logo.png";
import lseLogo from "@/assets/LSE_Logo.svg.png";

/* ─────────────────────── typing hook ─────────────────────── */

const useTypingEffect = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1500,
) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (phase === "typing") {
      if (charIndex < currentWord.length) {
        const t = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pauseTime);
        return () => clearTimeout(t);
      }
    }
    if (phase === "deleting") {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayText(currentWord.slice(0, charIndex - 1));
        }, deletingSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIndex((p) => (p + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [phase, charIndex, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

/* ─────────────────────── code block ─────────────────────── */

const codeString = `const parth = {
  name: "Parth Tyagi",
  location: "Toronto",
  yearsOfExperience: "3+",
  projectsBuilt: "15+",
  university: "University of Toronto",
  major: ["Computer Science", "Applied Math"],
  technologies: ["Python", "Java", "C", "AWS", "Docker", "TensorFlow", "PostgreSQL"],
  skills: ["Backend Development", "Machine Learning", "Data Engineering", "Full Stack"]
};`;

const SyntaxCode = () => {
  const kw = "text-[#c586c0]";
  const vr = "text-[#9cdcfe]";
  const st = "text-[#ce9178]";
  const br = "text-[#ffd700]";
  const pn = "text-[#d4d4d4]";
  const ab = "text-[#da70d6]";

  return (
    <code className="text-[10px] sm:text-xs leading-relaxed">
      <span className={kw}>const</span> <span className={vr}>parth</span> <span className={pn}>=</span> <span className={br}>{"{"}</span>
      {"\n  "}<span className={vr}>name</span><span className={pn}>:</span> <span className={st}>"Parth Tyagi"</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>location</span><span className={pn}>:</span> <span className={st}>"Toronto"</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>yearsOfExperience</span><span className={pn}>:</span> <span className={st}>"3+"</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>projectsBuilt</span><span className={pn}>:</span> <span className={st}>"15+"</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>university</span><span className={pn}>:</span> <span className={st}>"University of Toronto"</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>major</span><span className={pn}>:</span> <span className={ab}>[</span><span className={st}>"Computer Science"</span><span className={pn}>,</span> <span className={st}>"Applied Math"</span><span className={ab}>]</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>technologies</span><span className={pn}>:</span> <span className={ab}>[</span><span className={st}>"Python"</span><span className={pn}>,</span> <span className={st}>"Java"</span><span className={pn}>,</span> <span className={st}>"C"</span><span className={pn}>,</span> <span className={st}>"AWS"</span><span className={pn}>,</span> <span className={st}>"..."</span><span className={ab}>]</span><span className={pn}>,</span>
      {"\n  "}<span className={vr}>skills</span><span className={pn}>:</span> <span className={ab}>[</span><span className={st}>"Backend"</span><span className={pn}>,</span> <span className={st}>"ML"</span><span className={pn}>,</span> <span className={st}>"Data Eng"</span><span className={pn}>,</span> <span className={st}>"Full Stack"</span><span className={ab}>]</span>
      {"\n"}<span className={br}>{"}"}</span><span className={pn}>;</span>
    </code>
  );
};

/* ─────────────────────── data ─────────────────────── */

const experiences = [
  {
    company: "Tempo Software",
    shortName: "Tempo",
    location: "Toronto, ON",
    logoUrl: "https://res.cloudinary.com/warmly/image/upload/q_auto,f_auto,fl_lossy,c_crop,g_custom/v1762958843/warm_opps_user_avatars_production/eti9329ch2cygofkfke2.png",
    accent: "from-blue-500/20 to-cyan-500/10",
    accentBorder: "hover:border-blue-500/30",
    roles: [{
      title: "Software Engineer Intern",
      dates: "June 2026 – Present",
      bullets: [
        "Working with Java/Spring Boot to build and maintain backend services for a SaaS platform",
        "Building RESTful APIs and integrating with third-party services to enhance platform functionality",
        "Developing React frontends using TypeScript, Redux, and Material-UI to improve user experience",
        "Implementing unit and integration tests to ensure code quality and reliability",
        "Collaborating with cross-functional teams to deliver new features and improvements",
      ],
    }],
  },
  {
    company: "Esya Technologies",
    shortName: "Esya",
    location: "Toronto, ON",
    logoSrc: esyaLogo,
    accent: "from-emerald-500/20 to-teal-500/10",
    accentBorder: "hover:border-emerald-500/30",
    roles: [{
      title: "Software Engineer Intern",
      dates: "Apr 2025 – Jul 2025",
      bullets: [
        "Built FastAPI services for PII detection/anonymization using YAML + regex for ETL pipelines",
        "Deployed dev/staging on AWS (ECS, S3, KMS) with Docker + GitHub Actions CI/CD",
        "Improved batch processing ~25% with Redis-backed background jobs and faster S3 I/O",
        "Added JWT auth and CloudWatch audit logging for secure access and debugging",
        "Orchestrated S3-triggered ETL workflows using AWS Lambda",
        "Expanded pytest coverage with synthetic data; improved F1 ~92% → ~96%",
        "Implemented k-anonymity checks and privacy risk reports; documented in Confluence/Jira",
      ],
    }],
  },
  {
    company: "CS Student Community",
    shortName: "CSSC",
    location: "Mississauga, ON",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQEHyviM79Tl2g/company-logo_200_200/company-logo_200_200/0/1630656546909?e=1784160000&v=beta&t=Q_e0O3Cw0ltqin8LJWCXc2g3X84q-5yElUN4OdoHms8",
    accent: "from-violet-500/20 to-purple-500/10",
    accentBorder: "hover:border-violet-500/30",
    roles: [
      {
        title: "Software Engineer",
        dates: "Sept 2025 – Jan 2026",
        bullets: [
          "Built a RAG-based AI chatbot for the CSSC site, improving support for 3K+ monthly users",
          "Developed a resources hub (React + Angular) with search, tagging, and GitHub/Drive sync",
          "Set up Jenkins CI/CD with linting, tests, and automated deploys to improve release quality",
        ],
      },
      {
        title: "Director of Tech",
        dates: "Jan 2026 – Apr 2026",
        bullets: [
          "Led the technical team, managing development workflows, code reviews, and feature rollouts",
          "Maintained and improved infra, shipping updates while ensuring performance and reliability",
          "Delivered hands-on workshops, mentored students on practical tools & real-life applications",
        ],
      },
    ],
  },
];

const educationData = [
  {
    institution: "University of Toronto",
    degree: "Honours Bachelor of Science (HBSc)",
    field: "Computer Science, Stats and Applied Math",
    dates: "2023 – 2027",
    location: "Toronto, ON",
    logo: uoftLogo,
    accent: "from-blue-500/15 to-indigo-500/10",
    accentBorder: "hover:border-blue-500/30",
  },
  {
    institution: "London School of Economics",
    degree: "Summer School",
    field: "",
    courses: [
      "ME314 – Introduction to Data Science and Machine Learning",
      "FM360 – Options, Futures and Other Financial Derivatives",
    ],
    dates: "2025",
    location: "London, UK",
    logo: lseLogo,
    accent: "from-rose-500/15 to-pink-500/10",
    accentBorder: "hover:border-rose-500/30",
  },
];

const skillCategories = [
  { title: "Languages", skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "R", "Bash", "HTML"], icon: "💻" },
  { title: "Frameworks", skills: ["FastAPI", "React", "Flask", "Node.js", "scikit-learn", "PyTorch", "Spring Boot"], icon: "⚡" },
  { title: "Cloud & Database", skills: ["AWS", "Docker", "Kubernetes", "Redis", "PostgreSQL", "NoSQL", "Google Cloud"], icon: "☁️" },
  { title: "Tools", skills: ["Git", "GitHub Actions", "Linux", "Pytest", "JUnit", "Postman", "CI/CD"], icon: "🔧" },
];

const projects = [
  { title: "Stock options platform", description: "Full-stack options analytics with Black-Scholes, binomial pricing, and ML forecasting. Optimized NumPy computations, PostgreSQL, Redis caching, and Docker CI/CD.", tags: ["Python", "FastAPI", "React"], link: "https://github.com/parthtyagi9/ThetaStrike", accent: "from-amber-500/20 to-orange-500/10" },
  { title: "Wellthify wellness app", description: "Full-stack AI platform delivering personalized fitness, diet, and health recommendations. Built with Flask and Node.js, integrated with Gemini and Google Cloud Text-to-Speech.", tags: ["Flask", "Node.js", "Cloud"], link: "https://github.com/parthtyagi9/wellthify", accent: "from-green-500/20 to-emerald-500/10" },
  { title: "Shadow monster game", description: "Console adventure game built entirely in RISC-V assembly. Implements player movement, enemy AI, pseudorandom placement, and dynamic grid rendering with memory-efficient storage.", tags: ["RISC-V", "Assembly"], link: "https://github.com/parthtyagi9", accent: "from-red-500/20 to-rose-500/10" },
  { title: "Scanalytics engine", description: "AI-powered analytics with FastAPI and multi-agent orchestration for automated KPI discovery. Translates business rules into PostgreSQL JSONB queries with structured Pydantic outputs.", tags: ["FastAPI", "Gemini", "PostgreSQL"], link: "https://github.com/parthtyagi9/Scanalytics", accent: "from-cyan-500/20 to-blue-500/10" },
  { title: "Custom UNIX shell", description: "Unix-style shell in C replicating core Bash features including piping, background jobs, and signal handling. Implements fork/exec, POSIX sockets, and robust process management.", tags: ["C", "Unix", "Systems"], link: "https://github.com/parthtyagi9", accent: "from-slate-500/20 to-gray-500/10" },
  { title: "AR museum dashboard", description: "React-based AR web app integrating Google OAuth, Google Maps API, and A-Frame/AR.js for location-based experiences. Stores AR elements in Firebase with optimized rendering.", tags: ["React", "A-Frame", "Firebase"], link: "https://github.com/parthtyagi9/ar-museum", accent: "from-purple-500/20 to-violet-500/10" },
];

/* ─────────────────────── animated tile wrapper ─────────────────────── */

const Tile = ({
  children,
  className = "",
  delay = 0,
  glowColor,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm
        transition-all duration-500 overflow-hidden
        hover:border-white/[0.15] hover:bg-white/[0.05]
        ${glowColor ? `hover:shadow-[0_0_40px_-12px] hover:shadow-${glowColor}` : "hover:shadow-xl hover:shadow-black/20"}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────── main component ─────────────────────── */

const TilePage = () => {
  const [copied, setCopied] = useState(false);
  const [expDialog, setExpDialog] = useState<number | null>(null);
  const [eduDialog, setEduDialog] = useState<number | null>(null);
  const [projDialog, setProjDialog] = useState<number | null>(null);
  const { toast } = useToast();

  const typedText = useTypingEffect(["Parth Tyagi", "Developer", "Engineer"], 100, 60, 1500);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText("parth_45");
    toast({ title: "Copied!", description: "parth_45 copied to clipboard." });
  };

  return (
    <section className="px-4 sm:px-6 py-6 sm:py-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* ═══════════════ ROW 1: INTRO + CODE ═══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Intro */}
          <Tile className="lg:col-span-3 p-8 sm:p-10" delay={0}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-purple-500/[0.05] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400/80 font-medium tracking-wide uppercase">
                  Available for opportunities
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground min-h-[1.2em] mb-5">
                {typedText}
                <span className="inline-block w-[3px] h-[0.85em] bg-blue-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                CS & Stats student at the University of Toronto. 15+ projects and 2 internships spanning
                full-stack development, machine learning, quantitative finance, and systems programming.
              </p>
              <div className="flex gap-3 mt-6">
                <motion.a
                  href="https://github.com/parthtyagi9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm font-medium text-foreground hover:bg-white/15 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/parth-tyagi45"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm font-medium text-foreground hover:bg-white/15 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </motion.a>
              </div>
            </div>
          </Tile>

          {/* Code Block */}
          <Tile className="lg:col-span-2" delay={0.08}>
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[10px] text-white/30 font-mono ml-2">parth.ts</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-white/30 hover:text-white/70 transition-colors p-1"
                aria-label="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto font-mono whitespace-pre">
              <SyntaxCode />
            </pre>
          </Tile>
        </div>

        {/* ═══════════════ ROW 2: EXPERIENCE + SKILLS ═══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Work Experience — ONE tile, sub-tiles inside */}
          <Tile className="lg:col-span-3 p-6" delay={0.12}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">Work Experience</h2>
                <p className="text-[11px] text-muted-foreground">2+ years building systems & leading technical initiatives</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setExpDialog(idx)}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`
                    relative flex items-center gap-3.5 p-3.5 rounded-xl cursor-pointer
                    bg-gradient-to-r ${exp.accent} border border-white/[0.06]
                    ${exp.accentBorder} transition-all duration-300
                    hover:shadow-lg hover:shadow-black/10
                  `}
                >
                  <div className="w-10 h-10 rounded-lg border border-white/10 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src={exp.logoUrl || exp.logoSrc}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground truncate">{exp.company}</h3>
                      {exp.roles.length > 1 && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded-md bg-white/10 text-[9px] font-medium text-white/60">
                          {exp.roles.length} roles
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {exp.roles[0].title} · {exp.roles[0].dates}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/20 shrink-0" />
                </motion.div>
              ))}
            </div>
          </Tile>

          {/* Skills */}
          <Tile className="lg:col-span-2 p-6" delay={0.16}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <h2 className="text-base font-bold text-foreground">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              {skillCategories.map((cat, ci) => (
                <div key={ci}>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-semibold flex items-center gap-1.5">
                    <span>{cat.icon}</span> {cat.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <motion.span
                        key={s}
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="px-2 py-1 rounded-md bg-white/[0.06] text-foreground/80 text-[10px] font-medium border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.1] transition-all cursor-default"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Tile>
        </div>

        {/* ═══════════════ ROW 3: EDUCATION + CONTACT ═══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Education — ONE tile, sub-tiles inside */}
          <Tile className="lg:col-span-2 p-6" delay={0.2}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-violet-400" />
              </div>
              <h2 className="text-base font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-2.5">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setEduDialog(idx)}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`
                    flex items-center gap-3.5 p-3.5 rounded-xl cursor-pointer
                    bg-gradient-to-r ${edu.accent} border border-white/[0.06]
                    ${edu.accentBorder} transition-all duration-300
                    hover:shadow-lg hover:shadow-black/10
                  `}
                >
                  <div className="w-10 h-10 rounded-lg border border-white/10 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center p-1">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground truncate">{edu.institution}</h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {edu.degree} · {edu.dates}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/20 shrink-0" />
                </motion.div>
              ))}
            </div>
          </Tile>

          {/* Contact / Socials */}
          <Tile className="lg:col-span-3 p-6" delay={0.24}>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.04] via-transparent to-amber-500/[0.04] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/15 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-rose-400" />
                </div>
                <h2 className="text-base font-bold text-foreground">Get in touch</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: "parthtyagi1204",
                    href: "mailto:parthtyagi1204@gmail.com",
                    color: "from-blue-500/20 to-blue-600/10",
                    hoverBorder: "hover:border-blue-500/30",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    value: "parth-tyagi45",
                    href: "https://linkedin.com/in/parth-tyagi45",
                    color: "from-sky-500/20 to-sky-600/10",
                    hoverBorder: "hover:border-sky-500/30",
                    external: true,
                  },
                  {
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                    value: "parthtyagi9",
                    href: "https://github.com/parthtyagi9",
                    color: "from-gray-500/20 to-gray-600/10",
                    hoverBorder: "hover:border-gray-400/30",
                    external: true,
                  },
                  {
                    icon: <SiDiscord className="w-5 h-5" />,
                    label: "Discord",
                    value: "parth_45",
                    color: "from-indigo-500/20 to-indigo-600/10",
                    hoverBorder: "hover:border-indigo-500/30",
                    isDiscord: true,
                  },
                ].map((item, i) => {
                  const inner = (
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`
                        flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer
                        bg-gradient-to-b ${item.color} border border-white/[0.06]
                        ${item.hoverBorder} transition-all duration-300
                        hover:shadow-lg hover:shadow-black/10
                      `}
                    >
                      <span className="text-foreground/70">{item.icon}</span>
                      <div className="text-center">
                        <p className="text-xs font-semibold text-foreground">{item.label}</p>
                        <p className="text-[9px] text-muted-foreground truncate max-w-full">{item.value}</p>
                      </div>
                    </motion.div>
                  );

                  if (item.isDiscord) {
                    return (
                      <div key={i} onClick={copyDiscord}>
                        {inner}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={i}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {inner}
                    </a>
                  );
                })}
              </div>
            </div>
          </Tile>
        </div>

        {/* ═══════════════ ROW 4: PROJECTS ═══════════════ */}
        <Tile className="p-6" delay={0.28}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">Projects</h2>
                <p className="text-[11px] text-muted-foreground">Full-stack systems, ML apps, and systems-level tools</p>
              </div>
            </div>
            <motion.a
              href="https://github.com/parthtyagi9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.06] text-xs text-muted-foreground hover:text-foreground hover:border-white/[0.15] transition-all"
            >
              Explore all <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                onClick={() => setProjDialog(idx)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  p-4 rounded-xl cursor-pointer
                  bg-gradient-to-br ${proj.accent} border border-white/[0.06]
                  hover:border-white/[0.15] transition-all duration-300
                  hover:shadow-lg hover:shadow-black/10 group
                `}
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">{proj.title}</h4>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded-md bg-white/[0.08] text-foreground/60 text-[9px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground group-hover:text-foreground transition-colors">
                  View details <ExternalLink className="w-3 h-3" />
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground text-center mt-5 opacity-60">
            15+ additional projects across AI, ML, systems, backend and full-stack development
          </p>
        </Tile>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-[11px] text-muted-foreground/50">
            © {new Date().getFullYear()} Parth Tyagi
          </p>
        </div>
      </div>

      {/* ═══════════════ DIALOGS ═══════════════ */}

      {/* Experience Dialog */}
      <Dialog open={expDialog !== null} onOpenChange={(o) => !o && setExpDialog(null)}>
        {expDialog !== null && (
          <DialogContent className="rounded-2xl border-white/[0.1] bg-background/95 backdrop-blur-xl max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-white/10 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center shadow-lg">
                  <img
                    src={experiences[expDialog].logoUrl || experiences[expDialog].logoSrc}
                    alt={experiences[expDialog].company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-foreground">
                    {experiences[expDialog].company}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {experiences[expDialog].location}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              {experiences[expDialog].roles.map((role, ri) => (
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ri * 0.1 }}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5"
                >
                  <div className="mb-3">
                    <p className="text-sm font-bold text-foreground">{role.title}</p>
                    <p className="text-xs text-muted-foreground">{role.dates}</p>
                  </div>
                  <div className="space-y-2.5">
                    {role.bullets.map((b, bi) => (
                      <motion.p
                        key={bi}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ri * 0.1 + bi * 0.04 }}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-blue-400/60 before:font-bold"
                      >
                        {b}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Education Dialog */}
      <Dialog open={eduDialog !== null} onOpenChange={(o) => !o && setEduDialog(null)}>
        {eduDialog !== null && (
          <DialogContent className="rounded-2xl border-white/[0.1] bg-background/95 backdrop-blur-xl max-w-lg">
            <DialogHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-white/10 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center p-1.5 shadow-lg">
                  <img src={educationData[eduDialog].logo} alt={educationData[eduDialog].institution} className="w-full h-full object-contain" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-foreground">
                    {educationData[eduDialog].institution}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {educationData[eduDialog].degree}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <div className="mt-4 space-y-3">
              {educationData[eduDialog].field && (
                <p className="text-sm text-foreground/80">{educationData[eduDialog].field}</p>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{educationData[eduDialog].location}</span>
                <span className="text-white/20">·</span>
                <span>{educationData[eduDialog].dates}</span>
              </div>
              {educationData[eduDialog].courses && (
                <div className="mt-2 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 space-y-2">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Courses</p>
                  {educationData[eduDialog].courses!.map((c, ci) => (
                    <motion.p
                      key={ci}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: ci * 0.08 }}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-violet-400/60 before:font-bold"
                    >
                      {c}
                    </motion.p>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Project Dialog */}
      <Dialog open={projDialog !== null} onOpenChange={(o) => !o && setProjDialog(null)}>
        {projDialog !== null && (
          <DialogContent className="rounded-2xl border-white/[0.1] bg-background/95 backdrop-blur-xl max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                {projects[projDialog].title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {projects[projDialog].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[projDialog].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/[0.06] text-foreground/80 text-xs font-medium border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={projects[projDialog].link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm font-medium text-foreground hover:bg-white/15 transition-colors"
              >
                <Github className="w-4 h-4" /> View on GitHub
              </motion.a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default TilePage;
