import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaHashtag } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { IoSchool } from 'react-icons/io5';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-radial from-white via-orange-50 to-orange-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-transparent to-orange-700 opacity-10"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">
              Ritik Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              B.Tech CSE Student | Python Developer | Data Analyst
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Ritik261" target="_blank" className="text-2xl text-orange-600 hover:text-orange-700 transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ritiksingh01" target="_blank" className="text-2xl text-orange-600 hover:text-orange-700 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:ritiksingh1356@gmail.com" className="text-2xl text-orange-600 hover:text-orange-700 transition-colors">
                <FaEnvelope />
              </a>
              <a href="https://medium.com/@ritiksingh1356" target="_blank" className="text-2xl text-orange-600 hover:text-orange-700 transition-colors">
                <FaMedium />
              </a>
              <a href="https://ritik-singh.hashnode.dev" target="_blank" className="text-2xl text-orange-600 hover:text-orange-700 transition-colors">
                <FaHashtag />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            <BiCodeAlt className="inline-block mr-2 mb-1 text-orange-600" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Programming</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Python', 'SQL', 'Bash', 'Java', 'Flask'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Data Science</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Machine Learning', 'Statistics', 'Data Modeling', 'Data Cleaning'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Power BI', 'Azure', 'PostgreSQL', 'MySQL', 'ETL Pipelines'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            <MdWork className="inline-block mr-2 mb-1 text-orange-600" />
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Python Intern</h3>
                  <p className="text-orange-600">Pantech Solutions</p>
                </div>
                <p className="text-gray-600">Oct 2024 – Nov 2024</p>
              </div>
              <p className="text-gray-700">Built an OCR web application using Python and Flask, automating text extraction from images with 85% accuracy.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Power BI Intern</h3>
                  <p className="text-orange-600">PWC (via Forage)</p>
                </div>
                <p className="text-gray-600">Jun 2024 – Jul 2024</p>
              </div>
              <p className="text-gray-700">Created Power BI dashboards for call center and diversity reports, uncovering insights to improve KPIs and workforce initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white" id="projects">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* OCR Web Application */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">OCR Web Application</h3>
        <p className="text-gray-700 mb-4">
          Developed an Optical Character Recognition (OCR) app using Python and Flask, enabling automated text extraction from image files.
        </p>
        <div className="flex space-x-2">
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Python</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Flask</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">OCR</span>
        </div>
      </div>

      {/* Customer Segmentation Using SQL */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Segmentation Using SQL</h3>
        <p className="text-gray-700 mb-4">
          Performed customer segmentation on a dataset of 5,000+ customers by analyzing purchasing behaviors and demographics using SQL.
        </p>
        <div className="flex space-x-2">
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">SQL</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Data Analysis</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Customer Segmentation</span>
        </div>
      </div>

      {/* Netflix Data Analysis */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Netflix Data Analysis</h3>
        <p className="text-gray-700 mb-4">
          Analyzed a dataset of 7,000+ movies and TV shows, uncovering content trends and viewer preferences through SQL queries.
        </p>
        <div className="flex space-x-2">
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">SQL</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Data Analysis</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Content Trends</span>
        </div>
      </div>

      {/* Superstore Sales Analysis */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-900">Superstore Sales Analysis</h3>
        <p className="text-gray-700 mb-4">
          Built a Power BI dashboard to track KPIs such as profit, sales, and taxes, providing actionable insights for decision-making.
        </p>
        <div className="flex space-x-2">
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Power BI</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Business Intelligence</span>
          <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Data Visualization</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col space-y-4 text-center">
              <p className="text-gray-700">
                I'm currently looking for new opportunities in Python Development and Data Analysis. Feel free to reach out!
              </p>
              <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
            <FaEnvelope className="text-orange-600" />
            <a href="mailto:ritiksingh1356@gmail.com?subject=Opportunity Inquiry&body=Hi Ritik, I came across your portfolio and would like to discuss..." className="text-orange-600 hover:text-orange-700">
              ritiksingh1356@gmail.com
            </a>
          </div>
                <p className="text-gray-700">📱 +91-9569882903</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/Ritik261" target="_blank" className="text-orange-600 hover:text-orange-700">GitHub</a>
                <a href="https://linkedin.com/in/ritiksingh01" target="_blank" className="text-orange-600 hover:text-orange-700">LinkedIn</a>
                <a href="https://ritik-singh.hashnode.dev" target="_blank" className="text-orange-600 hover:text-orange-700">HashNode</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ritik Singh. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}