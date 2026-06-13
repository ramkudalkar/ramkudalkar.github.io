"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python & ETL", value: 90 },
  { name: "SQL & Query Optimization", value: 88 },
  { name: "PySpark & Big Data", value: 85 },
  { name: "Azure Data Factory (ADF)", value: 85 },
  { name: "Snowflake Data Warehouse", value: 82 },
  { name: "Azure Cloud", value: 80 },
  { name: "Git & Version Control", value: 80 },
  { name: "AWS Cloud", value: 75 },
  { name: "Docker & Containerization", value: 72 },
];

const certificates = [
  {
    title: "AWS Certified Solution Architect Associate",
    issuer: "Udemy (2023)",
  },
  {
    title: "AWS Cloud Technology Consultant",
    issuer: "Coursera (2024)",
  },
  {
    title: "DevOps on AWS",
    issuer: "Coursera (2024)",
  },
  {
    title: "IBM Cloud Essentials",
    issuer: "EDX (2023)",
  },
  {
    title: "Python for Data Science",
    issuer: "EDX (2023)",
  },
  {
    title: "Hardware & Networking Engineer + CCNA",
    issuer: "Jetking (2018-2019)",
  }
];

const services = [
  {
    title: "ETL Pipeline Development",
    description: "Designing scalable pipelines for extracting, transforming, and loading structured and unstructured data.",
  },
  {
    title: "Cloud Data Warehousing",
    description: "Architecting modern data warehouses using Snowflake, AWS Redshift, and Azure Synapse for high-performance analytics.",
  },
  {
    title: "Big Data Processing",
    description: "Leveraging PySpark and distributed computing to process large-scale datasets with efficiency and speed.",
  },
  {
    title: "Workflow Orchestration",
    description: "Automating complex data workflows using Azure Data Factory (ADF) and scheduling tools for seamless delivery.",
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] pt-32 pb-40 px-8 md:px-[10%] border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        
        {/* About & Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-4">About Me</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Data Engineer
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
              Data Engineering professional with 4.2+ years of experience building robust, scalable data solutions. I specialize in designing high-performance ETL pipelines and modern data architectures using Python, PySpark, SQL, and Snowflake. 
              <br /><br />
              With deep expertise in Azure Data Factory (ADF) and cross-cloud environments (AWS & Azure), I transform raw, complex datasets into reliable data assets that drive business intelligence and advanced analytics.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-neutral-500 text-sm mb-1">Location</p>
                <p className="text-white font-medium">Mumbai / Pune</p>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-1">Key Focus</p>
                <p className="text-white font-medium">Cloud Data Architecture</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-neutral-500 text-sm mb-1">Contact</p>
                <a href="mailto:ramchandrakudalkar6@gmail.com" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  ramchandrakudalkar6@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-neutral-300">{skill.name}</span>
                    <span className="text-emerald-400">{skill.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">Credentials</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certifications & Training
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                 <div className="h-full flex flex-col justify-between">
                    <h4 className="text-lg font-semibold text-white mb-4 leading-snug group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-neutral-500 font-medium tracking-wide">
                      {cert.issuer}
                    </p>
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">Core Solutions</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
              Data Engineering Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(service => (
              <div key={service.title} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-neutral-400 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-4">Professional</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
              Work History
            </h2>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              {/* Data Engineer Role */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-emerald-400" />
                <h4 className="text-2xl font-bold text-white">Data Engineer</h4>
                <p className="text-emerald-400 font-medium my-1">March 2022 - Present</p>
                <ul className="text-neutral-400 mt-4 space-y-3 text-sm leading-relaxed list-disc pl-4">
                  <li>Design and develop scalable ETL/ELT pipelines for seamless data extraction and transformation from disparate sources.</li>
                  <li>Build high-performance data processing solutions using Python and PySpark to handle multi-terabyte datasets.</li>
                  <li>Optimize complex SQL queries and Snowflake warehouse structures to reduce latency and compute costs.</li>
                  <li>Orchestrate data workflows using Azure Data Factory (ADF), managing triggers, dependencies, and monitoring.</li>
                  <li>Architect data migration strategies moving legacy on-premise systems to Snowflake cloud environments.</li>
                  <li>Ensure data integrity and reliability through automated validation, unit testing, and Docker-based deployments.</li>
                </ul>
              </div>

              {/* Technical Support Engineer */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-neutral-600 hover:border-emerald-400 transition-colors" />
                <h4 className="text-2xl font-bold text-white">Technical Support Engineer</h4>
                <p className="text-neutral-500 font-medium my-1">2019 - 2021</p>
                <ul className="text-neutral-400 mt-4 space-y-3 text-sm leading-relaxed list-disc pl-4">
                  <li>Monitored network systems and infrastructure, ensuring 99.9% uptime and proactive incident response.</li>
                  <li>Maintained and optimized relational databases using MySQL, performing routine backups and schema updates.</li>
                  <li>Troubleshot technical bugs across server environments to restore critical business applications.</li>
                  <li>Managed high-pressure production deployments and documented standard operating procedures (SOPs).</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">Academic</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
              Education
            </h2>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-emerald-400" />
                <h4 className="text-2xl font-bold text-white">MBA in Artificial Intelligence</h4>
                <p className="text-emerald-400 font-medium my-1">2023 - 2025 • Pune University</p>
                <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
                  Focused on intersectional expertise in advanced data analytics, machine learning strategies, and big data architecture. Developed a Tourism Management System leveraging Python and SQL to automate backend scheduling and demand forecasting.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-neutral-600" />
                <h4 className="text-2xl font-bold text-white">Bachelor of Computer Science</h4>
                <p className="text-neutral-500 font-medium my-1">2017 - 2019 • Model College of Science</p>
                <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
                  Established a strong foundation in computer networking, data structures, and database management systems (DBMS). Developed an Attendance Management System optimizing relational data structures for educational facilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
