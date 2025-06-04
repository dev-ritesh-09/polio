import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HopeBot",
      description: "A virtual companion chatbot designed to offer emotional support through AI-driven conversations.",
      image: "/project1.png",
      tech: ["HTML","CSS","JavaScript","Python","Gemini API"],
      github: "https://github.com/dev-ritesh-09/HopeBot",
      demo: "https://hopebot-team.netlify.app",
      featured: true
    },
    {
      title: "QuantumShield",
      description: "A cybersecurity toolkit to detect phishing, malware, and deepfake threats. Includes frontend–backend integration and secure SSL communication.",
      image: "/project2.png",
      tech: ["Python","Machine Learning","Flask","Jupyter Notebook","HTML","CSS","JavaScript"],
      github: "https://github.com/dev-ritesh-09/QuantumShield",
      demo: "https://dev-ritesh-09.github.io/QuantumShield/",
      featured: true
    },
    {
      title: "Real-Time Face Emotion Detection",
      description: "Detects facial emotions in real time using webcam input, OpenCV, and DeepFace.",
      image: "https://repository-images.githubusercontent.com/276222794/d5b1f586-2215-4868-8036-37b96093fdb7",
      tech: ["Python","OpenCV","DeepFace"],
      github: "https://github.com/dev-ritesh-09/Real-Time-Face-Emotion-Detection",
      // demo: "#",
      featured: false
    },
    {
      title: "MyBank Management System",
      description: "A backend banking system for managing user accounts, transactions, and OTP-based authentication.",
      image: "https://repository-images.githubusercontent.com/258924607/963d4300-8806-11ea-8625-78fa96781588",
      tech: ["Python","MySQL"],
      github: "https://github.com/dev-ritesh-09/MyBank-Management-System",
      // demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ArrowUp className="h-4 w-4 rotate-45" />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500/10"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/dev-ritesh-09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            aria-label="View all projects on GitHub"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
