import './contact.scss';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Button from './../Button/Button.jsx'

function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="contact" className="section-padding">
            <div className="container max-w-3xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="text-primary font-mono text-sm">
                        04. What's Next?
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Get In Touch
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
                        I'm currently looking for new opportunities as a junior
                        front-end developer. Whether you have a question, a
                        project idea, or just want to say hi — my inbox is
                        always open!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="mailto:nicolas.dupouy17@orange.fr"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>nicolas.dupouy17@orange.fr</span>
                        </a>
                        <span className="hidden sm:block text-border">|</span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-5 h-5" />
                            <span>La Rochelle, France</span>
                        </span>
                    </div>

                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium"
                    >
                        <a href="mailto:nicolas.dupouy17@orange.fr">
                            <Send className="w-5 h-5 mr-2" />
                            Say Hello
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
