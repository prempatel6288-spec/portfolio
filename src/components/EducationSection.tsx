import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import uoftLogo from "@/assets/university-of-toronto-logo.png";
import lseLogo from "@/assets/LSE_Logo.svg.png";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      institution: "University of Toronto Mississauga",
      degree: "Honours Bachelor of Science (HBSc)",
      field: "Computer Science & Applied Statistics, Minor in Mathematics",
      dates: "Sept 2023 – June 2027",
      location: "Mississauga, ON",
      logo: uoftLogo,
      additional: [
        "Relevant Coursework: Machine Learning, Data Structures, Statistical Modelling, Software Design, Regression Analysis",
        "UTM Co-op Internship Program (UTMCIP)"
      ]
    },
    {
      institution: "UTM Robotics Club",
      degree: "Software Developer",
      field: "",
      dates: "Sept 2024 – Present",
      location: "Mississauga, ON",
      logo: lseLogo,
      courses: [
        "Kobuki (TurtleBot): Configured ROS communication stack on Raspberry Pi for remote operation and working toward visual SLAM",
        "Robot Arm: Designing 6-DOF robotic manipulator with 3D-printed parts, inverse kinematics, and OpenCV object detection"
      ]
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-foreground"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-foreground/20"
            >
              <div className="p-6 flex gap-5">
                {/* Institution logo */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-border overflow-hidden bg-white flex items-center justify-center p-1.5">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    {edu.institution}
                  </h3>
                  <p className="font-medium text-foreground/80 mt-0.5">
                    {edu.degree}
                  </p>
                  {edu.field && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.field}
                    </p>
                  )}
                  {edu.additional && (
                    <div className="mt-3 space-y-1">
                      {edu.additional.map((item, i) => (
                        <p key={i} className="text-xs text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    <span className="text-border">·</span>
                    <span>{edu.dates}</span>
                  </div>

                  {edu.courses && (
                    <div className="mt-4 border-t border-border pt-3 space-y-1.5">
                      {edu.courses.map((course, i) => (
                        <p
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground/50"
                        >
                          {course}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
