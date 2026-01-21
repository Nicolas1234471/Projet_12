import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card rounded-lg p-6 hover-lift"
        >
            <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View Live"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
            </p>

            <div className="p-3 rounded-md bg-accent/10 border border-accent/20 mb-4">
                <p className="text-sm text-accent font-medium">
                    💡 {project.learnings}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default ProjectCard;
