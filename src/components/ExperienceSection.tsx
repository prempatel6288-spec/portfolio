import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import esyaLogo from "/src/assets/esya-logo.jpg";
import tempoLogo from "/src/assets/Tempo_logo.png";
import cssclogo from "/src/assets/cssc-logo.png";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Scotiabank UofT IMI BIGDataAIHUB",
      location: "Toronto, ON",
      logo: (
        <img
          alt="Scotiabank"
          src={tempoLogo}
          className="w-full h-full object-cover"
        />
      ),
      roles: [
        {
          title: "Data Engineer & ML Modeller",
          dates: "Nov 2025 – Mar 2026",
          bullets: [
            "Engineered 20+ features from 5.9M transactions across 7 banking channels for ~61K customers, including velocity, structuring signals, and KYC-derived ratios to surface AML risk patterns",
            "Built and evaluated scalable ML detection models (Isolation Forest, XGBoost, Random Forest) under severe label scarcity and class imbalance, optimizing for AUPRC over accuracy",
            "Applied SHAP to generate explainable AI outputs linking model risk scores to AML red flags from FINTRAC/FinCEN; collaborated in a 5-member agile team with hand-off-ready, reproducible pipelines",
            "Automated data pipeline for transaction preprocessing, feature extraction, and model inference reducing manual effort by 40%",
            "Documented model assumptions and limitations for business stakeholders; created Jira tickets for ongoing model monitoring and drift detection",
          ],
        },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
        >
          Work Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-16"
        >
          2+ years of hands-on experience in machine learning, data engineering,
          and robotics, with focus on building scalable systems and autonomous
          solutions.
        </motion.p>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="border border-border bg-card group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-foreground/20"
              onClick={() => toggleExpand(index)}
            >
              {/* Card header with logo + company info */}
              <div className="p-6 flex gap-5">
                {/* Company logo */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-border overflow-hidden bg-white flex items-center justify-center">
                    {exp.logo}
                  </div>
                </div>

                {/* Company + primary role */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                        {exp.roles[0].title}
                      </h3>
                      <p className="font-medium text-foreground/80 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2 text-sm text-muted-foreground">
                    <span className="whitespace-nowrap">{exp.location}</span>
                    <span className="text-border">·</span>
                    <span className="whitespace-nowrap">
                      {exp.roles[0].dates}
                    </span>
                    {exp.roles.length > 1 && (
                      <span className="whitespace-nowrap px-2 py-0.5 bg-muted text-xs border border-border">
                        +{exp.roles.length - 1} role
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable roles + bullet points */}
              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      {exp.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className={`border-t border-border pt-4 ${
                            roleIndex < exp.roles.length - 1 ? "pb-4" : ""
                          }`}
                        >
                          {/* Show sub-heading for multi-role cards */}
                          {exp.roles.length > 1 && (
                            <div className="mb-3">
                              <p className="text-sm font-semibold text-foreground">
                                {role.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {role.dates}
                              </p>
                            </div>
                          )}
                          <div className="space-y-2.5">
                            {role.bullets.map((bullet, i) => (
                              <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay:
                                    (roleIndex * role.bullets.length + i) *
                                    0.05,
                                }}
                                className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground/50"
                              >
                                {bullet}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
