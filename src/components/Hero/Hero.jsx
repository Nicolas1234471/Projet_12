import './Hero.scss';
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

            <div className="container max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-mono text-sm md:text-base mb-4"
                    >
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        <span className="gradient-text">Nicolas Dupouy</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8"
                    >
                        Développeur Front-End
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        I build beautiful, responsive, and user-friendly web
                        experiences. Passionate about creating interfaces that
                        people love to use.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-6 mb-16"
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass-card hover-lift text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass-card hover-lift text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:nicolas.dupouy17@orange.fr"
                            className="p-3 rounded-full glass-card hover-lift text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>

                    <motion.a
                        href="#about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <span className="font-mono text-sm">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowDown className="w-4 h-4" />
                        </motion.div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
