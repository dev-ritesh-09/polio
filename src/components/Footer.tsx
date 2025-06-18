import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ritesh Kumar
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Curious developer diving into AI, security, and software engineering.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  About Me
                </a>
                <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Projects
                </a>
                <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Skills
                </a>
                <a href="#contact" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-slate-400">ritesh.kumar.cs28@iilm.edu</p>
                <p className="text-slate-400">IILM University, Greater Noida, U.P - 201306</p>
                <div className="flex gap-4 pt-2">
                  <a 
                    href="https://github.com/dev-ritesh-09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/riteshmishra09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="ritesh.kumar.cs28@iilm.edu"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="Send Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section  */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ritesh Kumar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
