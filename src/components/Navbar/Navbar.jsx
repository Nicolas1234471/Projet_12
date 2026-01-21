import './Navbar.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: "#about", label: "About", number: "01" },
  { href: "#projects", label: "Projects", number: "02" },
  { href: "#skills", label: "Skills", number: "03" },
  { href: "#contact", label: "Contact", number: "04" },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'glass-card py-4' : 'py-6'
                }`}
            >
                <nav className="container flex items-center justify-between mx-auto">
                    <a href="#" className="text-2xl font-bold gradient-text">
                        {'ND'}
                    </a>

                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                                >
                                    <span className="text-primary font-mono text-sm mr-1">
                                        {link.number}.
                                    </span>
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a
                                href="/resume.pdf"
                                className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
                            >
                                Resume
                            </a>
                        </motion.li>
                    </ul>

                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>

                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden glass-card mt-2 mx-4 rounded-lg p-6"
                    >
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                                    >
                                        <span className="text-primary font-mono text-sm mr-2">
                                            {link.number}.
                                        </span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-4">
                                <a
                                    href="/resume.pdf"
                                    className="inline-block px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </motion.header>
        </div>
    );
}

export default Navbar;
