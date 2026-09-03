import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "C#", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Robotics & AI",
      skills: ["ROS", "OpenCV", "SLAM", "Scikit-learn", "XGBoost", "SHAP", "NumPy", "Pandas"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Git", "CI/CD", "REST APIs", "Jupyter", "Jira", "Agile/Scrum", "Azure", "Linux"]
    },
    {
      title: "Data & ML",
      skills: ["Machine Learning", "Data Engineering", "Feature Engineering", "SQL Optimization", "Statistical Modelling"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-foreground"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-muted text-foreground text-xs border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
