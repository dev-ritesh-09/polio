import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile image */}
          <div className="mb-8">
            <img 
              src="/profile.jpeg" 
              alt="Professional headshot"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-500/30 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Ritesh Kumar
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            Developer
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Curious developer diving into AI, security, and software engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/25"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-slate-600 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
