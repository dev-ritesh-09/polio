const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a software developer exploring full stack development, AI/ML, and cybersecurity. I enjoy building real world applications with a focus on clean code, scalable architecture, and strong security practices.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                My projects reflect a passion for continuous learning and practical problem solving using modern web technologies. I'm currently strengthening my foundation in backend systems, machine learning, and cloud tools aiming to deliver robust, high performance solutions.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I have participated in 8+ hackathons, gaining hands on experience working under pressure, collaborating in teams, and tackling diverse technical challenges.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I believe in open source collaboration, lifelong learning, and writing code that’s both maintainable and meaningful.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {/* <div>
                  <h3 className="text-blue-400 font-semibold text-lg mb-2">Expertise</h3>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Full-Stack Development</li>
                    <li>• Cloud Architecture</li>
                    <li>• System Design</li>
                    <li>• Secure Coding</li>
                  </ul>
                </div> */}
                {/* <div>
                  <h3 className="text-blue-400 font-semibold text-lg mb-2">Focus Areas</h3>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Scalability</li>
                    <li>• Security</li>
                    <li>• Code Quality</li>
                    <li>• Team Collaboration</li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Professional Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">Web Developer Intern</h4>
                    <p className="text-blue-400">SGCA Technologies Pvt Ltd | Jun 2025 – Present</p>
                    <p className="text-slate-300 text-sm mt-1">
                      Contributed to building and maintaining web applications, collaborating with the development team to improve UI/UX and functionality.
                    </p>
                  </div>
                  {/* <div className="border-l-2 border-slate-600 pl-4">
                    <h4 className="font-semibold text-white">Software Engineer</h4>
                    <p className="text-slate-400">Previous Company | 2019 - 2021</p>
                    <p className="text-slate-300 text-sm mt-1">
                      ....
                    </p>
                  </div> */}
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">B.Tech in Computer Science Engineering (CSE)</h4>
                  <p className="text-slate-400">IILM University | 2024 – 2028</p>
                  <p className="text-slate-300 text-sm">Focus on Learning and Development</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Senior Secondary</h4>
                  <p className="text-slate-400">Kendriya Vidyalaya | 2023</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Secondary</h4>
                  <p className="text-slate-400">Kendriya Vidyalaya | 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
