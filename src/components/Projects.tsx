"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "AWS Cloud", value: 90 },
  { name: "HTML/CSS", value: 85 },
  { name: "Containerization", value: 80 },
  { name: "Version Control", value: 55 },
  { name: "SQL", value: 40 },
  { name: "Python", value: 30 },
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
    title: "DevOps Automation",
    description: "CodePipeline, CodeBuild, CodeDeploy, and CloudFormation for streamlined CI/CD.",
  },
  {
    title: "Security & Compliance",
    description: "IAM, KMS, and Shield for managing access and ensuring robust infrastructure protection.",
  },
  {
    title: "Databases & Storage",
    description: "RDS, DynamoDB, Aurora, and Redshift tailored for high-performance and scalability.",
  },
  {
    title: "Monitoring & Management",
    description: "CloudWatch, CloudTrail, and Config for deep observability and system governance.",
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] pt-32 pb-40 px-8 md:px-[10%] border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        
        {/* About & Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-4">About Me</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              AWS DevOps Engineer
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
              Over three years of experience optimizing performance, enhancing security, and supporting scalable systems using AWS best practices. I thrive in dynamic environments where I can apply my skills in automation, CI/CD, and infrastructure design to solve complex challenges.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-neutral-500 text-sm mb-1">Location</p>
                <p className="text-white font-medium">Mumbai / Pune</p>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-1">Education</p>
                <p className="text-white font-medium">B.Sc. Computer Science</p>
              </div>
              <div className="col-span-2">
                <p className="text-neutral-500 text-sm mb-1">Contact</p>
                <a href="mailto:ramchandrakudalkar27@gmail.com" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  ramchandrakudalkar27@gmail.com
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
            <h3 className="text-2xl font-bold text-white mb-8">Technical Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-neutral-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
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
                    <h4 className="text-lg font-semibold text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors">
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

        {/* Services & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
          >
             <h3 className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-4">What I Do</h3>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                Cloud Services
             </h2>
             <div className="space-y-8">
               {services.map(service => (
                 <div key={service.title} className="flex gap-4">
                   <div className="mt-1">
                     <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            {/* Experience Timeline */}
             <h3 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-4">Career</h3>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                Professional Experience
             </h2>
             
             <div className="relative pl-8 border-l border-white/10 space-y-12">
               <div className="relative">
                 <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-emerald-400" />
                 <h4 className="text-2xl font-bold text-white">AWS DevOps Engineer</h4>
                 <p className="text-emerald-400 font-medium my-1">2022 - Present</p>
                 <ul className="text-neutral-400 mt-4 space-y-3 text-sm leading-relaxed list-disc pl-4">
                   <li>Continuously monitor network and system performance to identify and respond to issues, ensuring minimal disruption.</li>
                   <li>Diagnose and resolve technical problems related to network infrastructure and cloud automation.</li>
                   <li>Perform routine maintenance tasks, software updates, patches, and backups.</li>
                   <li>Manage concurrent deployments and tasks elegantly under pressure.</li>
                 </ul>
               </div>

               <div className="relative">
                 <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-neutral-600" />
                 <h4 className="text-2xl font-bold text-white">Bachelor of Computer Science</h4>
                 <p className="text-neutral-500 font-medium my-1">2017 - 2019 • Model College of Science</p>
                 <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
                   Developed an Attendance Management System leveraging Python, HTML, CSS, JavaScript, and SQL to automate operations for educational institutions.
                 </p>
               </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
