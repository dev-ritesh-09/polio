const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 40 },
        { name: "Python", level: 60 },
        { name: "JavaScript", level: 40 },
        { name: "HTML/CSS", level: 70 }
      ]
    },
    {
      title: "Databases & Backend",
      skills: [
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 60 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 88 },
        { name: "Linux", level: 50 },
        { name: "Vercel", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 80 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 60 },
        { name: "Time Management", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-400 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Professional Development</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-slate-300 text-sm">Regular participation in tech workshops and conferences</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Community</h4>
                <p className="text-slate-300 text-sm">Active contributor to open-source projects</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Best Practices</h4>
                <p className="text-slate-300 text-sm">Focus on clean code and maintainable solutions</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              // href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              aria-label="Download full resume"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
