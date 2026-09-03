import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const copyDiscordUsername = () => {
    navigator.clipboard.writeText("prempatel");
    toast({
      title: "Discord username copied!",
      description: "prempatel has been copied to your clipboard.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-foreground"
        >
          Get in touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 [&_a]:rounded-none [&_button]:rounded-none"
          >
            <a
              href="mailto:prem.patel@mail.utoronto.ca"
              className="flex items-center gap-4 p-4 border border-border hover:bg-muted transition-colors"
            >
              <Mail className="w-5 h-5 text-foreground" />
              <div>
                <p className="text-foreground font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-sm">prem.patel@mail.utoronto.ca</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/prem-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border hover:bg-muted transition-colors"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
              <div>
                <p className="text-foreground font-medium text-sm">LinkedIn</p>
                <p className="text-muted-foreground text-sm">prem-patel</p>
              </div>
            </a>

            <a
              href="https://github.com/prempatel6288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5 text-foreground" />
              <div>
                <p className="text-foreground font-medium text-sm">GitHub</p>
                <p className="text-muted-foreground text-sm">prempatel6288</p>
              </div>
            </a>

            <button
              onClick={copyDiscordUsername}
              className="flex items-center gap-4 p-4 border border-border hover:bg-muted transition-colors w-full text-left"
            >
              <SiDiscord className="w-5 h-5 text-foreground" />
              <div>
                <p className="text-foreground font-medium text-sm">Discord</p>
                <p className="text-muted-foreground text-sm">prempatel</p>
              </div>
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-background border-border text-foreground rounded-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-background border-border text-foreground rounded-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  className="bg-background border-border text-foreground rounded-none resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none"
              >
                {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
