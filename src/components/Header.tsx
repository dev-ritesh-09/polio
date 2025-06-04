import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ritesh Kumar
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="Scroll to About section"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="Scroll to Projects section"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="Scroll to Skills section"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="Scroll to Contact section"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/dev-ritesh-09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/riteshmishra09/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ritesh.kumar.cs28@iilm.edu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
