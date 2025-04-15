import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Venkat SR</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2">About</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2">Skills</a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2">Experience</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2">Projects</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-900">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Venkat SR</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                  Data Scientist & Software Engineer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  I build innovative solutions using data science and software engineering principles.
                  Passionate about creating impactful applications and extracting insights from data.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/assets/Venkat_DS_Resume_FT.pdf" target="_blank" className="btn-primary">
                    Data Science Resume
                  </a>
                  <a href="/assets/Venkat_SDE_Resume_FT.pdf" target="_blank" className="btn-secondary">
                    SDE Resume
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                  {/* Replace with your profile image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-4xl font-bold">
                    VS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white dark:bg-slate-800">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                I'm a passionate professional with expertise in both Data Science and Software Engineering. 
                With a strong foundation in machine learning, data analysis, and full-stack development, 
                I bring a unique perspective to solving complex problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                My background includes experience in developing scalable applications, implementing machine learning models,
                and creating data-driven solutions that deliver real business value.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                I'm constantly learning and exploring new technologies to stay at the forefront of innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-50 dark:bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Data Science</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Python</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Machine Learning</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Data Analysis</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Statistics</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Deep Learning</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">NLP</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">SQL</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Visualization</div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Software Engineering</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">JavaScript</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">TypeScript</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">React</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Node.js</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">REST APIs</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Git</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">CI/CD</div>
                  <div className="bg-gray-100 dark:bg-slate-700 rounded-md p-2 text-gray-800 dark:text-gray-200">Cloud Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white dark:bg-slate-800">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="card hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Data Analysis Project</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comprehensive data analysis project using Python and various ML techniques.
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="card hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Web Application</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full-stack web application built with React, Node.js, and MongoDB.
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="card hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Machine Learning Model</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Predictive model using advanced machine learning algorithms.
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 dark:bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Me</h2>
            
            <div className="max-w-lg mx-auto">
              <div className="card">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">LinkedIn Profile</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <a href="https://github.com/VenkatSR-14" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">GitHub Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Venkat SR. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
