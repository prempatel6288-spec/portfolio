import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";
import thetaStrikeImg from "@/assets/theta-strike.png";
import unixShellImg from "@/assets/unix-shell.png";
import scanalyticsImg from "@/assets/scanalytics.png";
import wellthifyImg from "@/assets/wellthify.png";
import shadowMonsterImg from "@/assets/shadow-monster.png";
import arMuseumImg from "@/assets/ar-museum.png";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "AI-Powered Financial Insights Dashboard",
      description: "End-to-end ML pipeline for revenue forecasting and churn prediction on large financial datasets. Automated data ingestion, optimized SQL queries, and interactive Tableau dashboards translating model outputs into business KPIs.",
      tags: ["Python", "SQL", "Scikit-learn", "AWS", "Tableau"],
      link: "https://github.com",
      image: thetaStrikeImg,
    },
    {
      title: "Team Task Tracker - GenAI Genesis Hackathon",
      description: "Full-stack agile task management system deployed end-to-end. Built REST APIs, designed SQL schemas, implemented authentication, and deployed to AWS with CI/CD workflow.",
      tags: ["Node.js", "Angular", "TypeScript", "AWS"],
      link: "https://github.com",
      image: wellthifyImg,
    },
    {
      title: "Painting Classifier - ML Challenge",
      description: "Evaluated 5 ML model families with advanced preprocessing and feature engineering. Diagnosed data quality issues, applied RobustScaler, and achieved 91% validation accuracy with Random Forest.",
      tags: ["Python", "Scikit-learn", "NumPy", "Google Colab"],
      link: "https://github.com",
      image: shadowMonsterImg,
    },
    {
      title: "Kobuki TurtleBot ROS Stack",
      description: "Configured ROS communication stack on Raspberry Pi for remote operation of 8 TurtleBots. Integrated Xbox Kinect for sensor fusion, working toward visual SLAM for autonomous navigation.",
      tags: ["ROS", "Python", "C++", "Raspberry Pi"],
      link: "https://github.com",
      image: scanalyticsImg,
    },
    {
      title: "6-DOF Robotic Arm with Inverse Kinematics",
      description: "Designing 6-DOF manipulator from 3D-printed parts with DS3240 servo motors. Implementing inverse kinematics via Arduino and integrating Xbox Kinect + OpenCV for real-time object detection.",
      tags: ["Arduino", "C", "OpenCV", "Fusion 360"],
      link: "https://github.com",
      image: unixShellImg,
    },
    {
      title: "MLOps Pipeline & Model Monitoring",
      description: "Automated data pipeline for AML feature engineering and model inference. Integrated SHAP for explainability, deployed scalable detection models with drift monitoring and reproducible outputs.",
      tags: ["Python", "Pandas", "SHAP", "XGBoost", "AWS"],
      link: "https://github.com",
      image: arMuseumImg,
    },
  ];

  // Distribute into 3 columns for masonry matching the reference layout
  const col1 = [projects[0], projects[3]]; // left
  const col2 = [projects[1], projects[4]]; // center
  const col3 = [projects[2], projects[5]]; // right

  const renderCard = (project: typeof projects[0], index: number) => (
    <motion.a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="block border border-border rounded-none overflow-hidden bg-card cursor-pointer transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-muted text-foreground text-xs rounded-none border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground transition-colors">
          View code <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.a>
  );

  return (
    <section id="projects" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground text-center mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4 text-foreground"
        >
          Work built and shipped
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground text-center mb-16"
        >
          Full-stack systems, ML applications, and systems-level tools.
        </motion.p>

        {/* Mobile: single column */}
        <div className="md:hidden space-y-6">
          {projects.map((p, i) => renderCard(p, i))}
        </div>

        {/* Desktop: 3 explicit columns with staggered heights */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          <div className="space-y-6">
            {col1.map((p, i) => renderCard(p, i))}
          </div>
          <div className="space-y-6 mt-12">
            {col2.map((p, i) => renderCard(p, i + 2))}
          </div>
          <div className="space-y-6">
            {col3.map((p, i) => renderCard(p, i + 4))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            asChild
            className="border-border hover:bg-muted rounded-none"
          >
            <a href="https://github.com/parthtyagi9" target="_blank" rel="noopener noreferrer">
              Explore more
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center text-foreground font-bold mt-20"
        >
          15+ additional projects across AI, ML, systems, backend and full-stack development.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
