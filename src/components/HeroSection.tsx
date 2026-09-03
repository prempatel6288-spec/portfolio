import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

const useTypingEffect = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1500,
) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("deleting"), pauseTime);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayText(currentWord.slice(0, charIndex - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [
    phase,
    charIndex,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
};
const codeString = `const prem = {
  name: "Prem Patel",
  location: "Brampton, ON",
  yearsOfExperience: "1+",
  projectsBuilt: "8+",
  university: "University of Toronto Mississauga",
  major: ["Computer Science", "Applied Statistics", "Minor: Mathematics"],
  technologies: ["Python", "Java", "C", "AWS", "ROS", "OpenCV", "Scikit-learn"],
  skills: ["Machine Learning", "Robotics", "Data Engineering", "Full Stack", "Cloud"]
};`;

const SyntaxHighlightedCode = () => {
  const keyword = "text-[#c586c0]"; // const, etc
  const variable = "text-[#9cdcfe]"; // variable names
  const property = "text-[#9cdcfe]"; // object keys
  const string = "text-[#ce9178]"; // strings
  const number = "text-[#b5cea8]"; // numbers
  const bracket = "text-[#ffd700]"; // brackets
  const punctuation = "text-[#d4d4d4]"; // colons, commas
  const arrayBracket = "text-[#da70d6]"; // array brackets

  return (
    <code>
      <span className={keyword}>const</span>{" "}
      <span className={variable}>prem</span>{" "}
      <span className={punctuation}>=</span>{" "}
      <span className={bracket}>{"{"}</span>
      {"\n"}
      {"  "}
      <span className={property}>name</span>
      <span className={punctuation}>:</span>{" "}
      <span className={string}>"Prem Patel"</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>location</span>
      <span className={punctuation}>:</span>{" "}
      <span className={string}>"Brampton, ON"</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>yearsOfExperience</span>
      <span className={punctuation}>:</span>{" "}
      <span className={string}>"1+"</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>projectsBuilt</span>
      <span className={punctuation}>:</span>{" "}
      <span className={string}>"8+"</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>university</span>
      <span className={punctuation}>:</span>{" "}
      <span className={string}>"University of Toronto Mississauga"</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>major</span>
      <span className={punctuation}>:</span>{" "}
      <span className={arrayBracket}>[</span>
      <span className={string}>"Computer Science"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"Applied Statistics"</span>
      <span className={arrayBracket}>]</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>technologies</span>
      <span className={punctuation}>:</span>{" "}
      <span className={arrayBracket}>[</span>
      <span className={string}>"Python"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"Java"</span>
      <span className={punctuation}>,</span> <span className={string}>"C"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"AWS"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"ROS"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"OpenCV"</span>
      <span className={arrayBracket}>]</span>
      <span className={punctuation}>,</span>
      {"\n"}
      {"  "}
      <span className={property}>skills</span>
      <span className={punctuation}>:</span>{" "}
      <span className={arrayBracket}>[</span>
      <span className={string}>"Machine Learning"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"Robotics"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"Data Engineering"</span>
      <span className={punctuation}>,</span>{" "}
      <span className={string}>"Full Stack"</span>
      <span className={arrayBracket}>]</span>
      {"\n"}
      <span className={bracket}>{"}"}</span>
      <span className={punctuation}>;</span>
    </code>
  );
};

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const typedText = useTypingEffect(
    ["Prem Patel", "ML Engineer", "Roboticist"],
    100,
    60,
    1500,
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero text */}
        <div className="py-20 md:py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground min-h-[1.2em]"
          >
            {typedText}
            <span className="inline-block w-[3px] h-[1em] bg-foreground ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I'm a Computer Science & Applied Statistics student at the
            University of Toronto Mississauga. I've built 8+ projects spanning
            machine learning, robotics, cloud-native development, and agile
            delivery, with hands-on experience in autonomous systems and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 justify-center"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-foreground text-background hover:bg-foreground/90 px-6 rounded-none"
            >
              View projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border hover:bg-muted px-6 rounded-none"
            >
              Contact
            </Button>
          </motion.div>
        </div>

        {/* Interactive code block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative mb-12 border border-border bg-[#1e1e1e]"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-[#808080] font-mono ml-2">
                prem.ts
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="text-[#808080] hover:text-[#d4d4d4] transition-colors p-1"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
            <SyntaxHighlightedCode />
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
