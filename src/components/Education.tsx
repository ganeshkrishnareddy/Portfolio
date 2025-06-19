import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Trophy, ExternalLink, Star, Github } from 'lucide-react';

interface EducationItemProps {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
  grade?: string;
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({
  period,
  degree,
  institution,
  location,
  description,
  grade,
  isLast = false
}) => {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute top-0 left-0 h-full w-px bg-teal-200 dark:bg-teal-800 ml-3" />
      )}
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 z-10" />
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          {grade && (
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              <span className="font-medium text-teal-600 dark:text-teal-400">{grade}</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{degree}</h3>
        <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">{institution}</p>
        {description && <p className="text-slate-600 dark:text-slate-300">{description}</p>}
      </div>
    </div>
  );
};

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  link?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  issuer,
  date,
  expiryDate,
  credentialId,
  link
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{title}</h3>
          <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">{issuer}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <div>
              <span className="font-medium">Issued:</span> {date}
            </div>
            {expiryDate && expiryDate !== "---------, ----" && (
              <div>
                <span className="font-medium">Expires:</span> {expiryDate}
              </div>
            )}
            {credentialId && (
              <div className="sm:col-span-2">
                <span className="font-medium">ID:</span> <code className="text-xs bg-slate-100 dark:bg-slate-700 px-1 rounded">{credentialId}</code>
              </div>
            )}
          </div>
        </div>
      </div>
      {link && (
        <div className="flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors"
          >
            <span>Verify</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
};

interface AchievementItemProps {
  title: string;
  description: string;
  date: string;
  icon: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, description, date, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div className="text-2xl mr-4 mt-1">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-2 text-sm">{description}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationData = [
    {
      period: "August 2022 - Present",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      description: "Specializing in Cybersecurity, Software Development, and System Administration"
    },
    {
      period: "April 2020 - March 2022",
      degree: "Intermediate Education (MPC)",
      institution: "Narayana Junior College",
      location: "Tirupati, Andhra Pradesh",
      grade: "79.4%"
    },
    {
      period: "April 2019 - March 2020",
      degree: "Secondary School Certificate",
      institution: "Narayana EM High School",
      location: "Tirupati, Andhra Pradesh",
      grade: "98%",
      isLast: true
    }
  ];

  const certificationData = [
    {
      title: "Deloitte Australia - Cyber Job Simulation",
      issuer: "Forage",
      date: "June 2025",
      credentialId: "3o683ubu49Fa5G3wB",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_SLa4iANMguG7m2Zin_1748834447065_completion_certificate.pdf"
    },
    {
      title: "Tata Group - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "June 2025",
      credentialId: "X5R5dKq9DkjnwSQW4",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_SLa4iANMguG7m2Zin_1749878938454_completion_certificate.pdf"
    },
    {
      title: "Microsoft Power Platform Fundamentals (PL-900)",
      issuer: "Coursera",
      date: "April 2025",
      credentialId: "SHY8XOE77RB5",
      link: "https://coursera.org/verify/specialization/SHY8XOE77RB5"
    },
    {
      title: "QuickHeal Certified Digital Forensic Investigator",
      issuer: "Quick Heal Academy",
      date: "January 2025",
      credentialId: "LPU-0000-780553",
      link: "https://lms.quickhealacademy.com/certificates/verification/exam?id=LPU-0000-780553"
    },
    {
      title: "CompTIA Security+ CE",
      issuer: "CompTIA",
      date: "January 2025",
      expiryDate: "January 2028",
      credentialId: "QDR90YBSZJVQQKWS",
      link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=YLP7LZ44L706VHCZ"
    },
    {
      title: "Summer Training on Linux System Administration",
      issuer: "Lovely Professional University – Centre for Professional Enhancement",
      date: "August 2024",
      credentialId: "Registration No: 12212186",
      link: "https://drive.google.com/file/d/1ZfYZAIalNs9-qdog4RvJONdAzibGeSUb/view?usp=sharing"
    },
    {
      title: "CompTIA Network+ CE",
      issuer: "CompTIA",
      date: "August 2024",
      expiryDate: "January 2028",
      credentialId: "83JGFW2TN2RQQCKG",
      link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=9LGHCR89B7LLFLS1"
    },
    {
      title: "CS50's Understanding Technology",
      issuer: "Harvard University",
      date: "November 2023",
      credentialId: "1f305a31-6d98-4043-ac2b-35c76bc38a0c",
      link: "https://cs50.harvard.edu/certificates/1f305a31-6d98-4043-ac2b-35c76bc38a0c"
    }
  ];

  const achievementData = [
    {
      title: "Deloitte & Tata Cybersecurity Job Simulations",
      description: "Successfully completed industry-level cybersecurity simulations from leading consulting firms, demonstrating practical skills in threat analysis and security operations.",
      date: "June 2025",
      icon: "🏆"
    },
    {
      title: "Microsoft Power Platform Certification",
      description: "Achieved certification in Microsoft Power Platform fundamentals, expanding cloud and business automation expertise.",
      date: "April 2025",
      icon: "☁️"
    },
    {
      title: "CompTIA Security+ & Network+ Certified",
      description: "Achieved industry-recognized certifications in cybersecurity and networking fundamentals, validating core security knowledge.",
      date: "January 2025",
      icon: "🛡️"
    },
    {
      title: "QuickHeal Digital Forensics Certification",
      description: "Completed specialized training in digital forensics investigation techniques and cybercrime analysis.",
      date: "January 2025",
      icon: "🔍"
    },
    {
      title: "Red Hat Linux System Administration Training",
      description: "Completed intensive training in Linux system optimization, server security, and automation during internship program.",
      date: "August 2024",
      icon: "🐧"
    },
    {
      title: "Reliance Foundation Undergraduate Scholarship",
      description: "Selected for and awarded ₹2,00,000 scholarship from the Reliance Foundation for academic excellence and potential.",
      date: "January 2023",
      icon: "🎓"
    },
    {
      title: "ProgVision Freelance Success",
      description: "Built and scaled freelance agency serving 200+ clients with web development and digital marketing services.",
      date: "February 2022 - Present",
      icon: "💼"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Education & <span className="text-teal-600 dark:text-teal-400">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            My academic journey and professional achievements that have shaped my knowledge and expertise in technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center justify-center">
            <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
              <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            </span>
            Education
          </h3>
          <div className="max-w-3xl mx-auto">
            {educationData.map((edu, index) => (
              <EducationItem key={index} {...edu} isLast={edu.isLast || index === educationData.length - 1} />
            ))}
          </div>
        </div>

        {/* Certifications & Achievements Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </span>
              Certifications
            </h3>
            <div className="space-y-6">
              {certificationData.map((cert, index) => (
                <CertificationItem key={index} {...cert} />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                <Trophy className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </span>
              Achievements
            </h3>
            <div className="space-y-6">
              {achievementData.map((achievement, index) => (
                <AchievementItem key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Explore My Work</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <a 
              href="https://github.com/ganeshkrishnareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;