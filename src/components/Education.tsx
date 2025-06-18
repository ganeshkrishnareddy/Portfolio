import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Trophy, ExternalLink, Star } from 'lucide-react';

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
  category?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  issuer,
  date,
  expiryDate,
  credentialId,
  link,
  category
}) => {
  const getCategoryColor = (cat?: string) => {
    switch (cat) {
      case 'Security': return 'border-red-500';
      case 'Development': return 'border-blue-500';
      case 'Cloud': return 'border-purple-500';
      case 'System': return 'border-green-500';
      default: return 'border-teal-500';
    }
  };

  const getCategoryBadge = (cat?: string) => {
    switch (cat) {
      case 'Security': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'Development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Cloud': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'System': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
    }
  };

  return (
    <div className={`bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 ${getCategoryColor(category)} hover:shadow-lg transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white pr-4">{title}</h3>
            {category && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadge(category)}`}>
                {category}
              </span>
            )}
          </div>
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
            <span>Verify Certification</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
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
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_SLa4iANMguG7m2Zin_1748834447065_completion_certificate.pdf",
      category: "Security"
    },
    {
      title: "Tata Group - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "June 2025",
      credentialId: "X5R5dKq9DkjnwSQW4",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_SLa4iANMguG7m2Zin_1749878938454_completion_certificate.pdf",
      category: "Security"
    },
    {
      title: "Microsoft Power Platform Fundamentals (PL-900)",
      issuer: "Coursera",
      date: "April 2025",
      credentialId: "SHY8XOE77RB5",
      link: "https://coursera.org/verify/specialization/SHY8XOE77RB5",
      category: "Cloud"
    },
    {
      title: "QuickHeal Certified Digital Forensic Investigator",
      issuer: "Quick Heal Academy",
      date: "January 2025",
      credentialId: "LPU-0000-780553",
      link: "https://lms.quickhealacademy.com/certificates/verification/exam?id=LPU-0000-780553",
      category: "Security"
    },
    {
      title: "CompTIA Security+ CE",
      issuer: "CompTIA",
      date: "January 2025",
      expiryDate: "January 2028",
      credentialId: "QDR90YBSZJVQQKWS",
      link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=YLP7LZ44L706VHCZ",
      category: "Security"
    },
    {
      title: "Summer Training on Linux System Administration",
      issuer: "Lovely Professional University – Centre for Professional Enhancement",
      date: "August 2024",
      credentialId: "Registration No: 12212186",
      link: "https://drive.google.com/file/d/1ZfYZAIalNs9-qdog4RvJONdAzibGeSUb/view?usp=sharing",
      category: "System"
    },
    {
      title: "CompTIA Network+ CE",
      issuer: "CompTIA",
      date: "August 2024",
      expiryDate: "January 2028",
      credentialId: "83JGFW2TN2RQQCKG",
      link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=9LGHCR89B7LLFLS1",
      category: "Security"
    },
    {
      title: "CS50's Understanding Technology",
      issuer: "Harvard University",
      date: "November 2023",
      credentialId: "1f305a31-6d98-4043-ac2b-35c76bc38a0c",
      link: "https://cs50.harvard.edu/certificates/1f305a31-6d98-4043-ac2b-35c76bc38a0c",
      category: "Development"
    }
  ];

  const groupedCertifications = certificationData.reduce((acc, cert) => {
    const category = cert.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cert);
    return acc;
  }, {} as Record<string, typeof certificationData>);

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Education & <span className="text-teal-600 dark:text-teal-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            My academic journey and professional certifications that have shaped my knowledge and expertise in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </span>
              Education
            </h3>
            {educationData.map((edu, index) => (
              <EducationItem key={index} {...edu} isLast={edu.isLast || index === educationData.length - 1} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                <Trophy className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </span>
              Key Achievements
            </h3>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md space-y-6 mb-8">
              {[
                {
                  title: "Reliance Foundation Undergraduate Scholarship",
                  desc: "Selected for and awarded ₹2,00,000 scholarship from the Reliance Foundation for academic excellence.",
                  date: "January 2023",
                  icon: "🏆"
                },
                {
                  title: "Red Hat Linux System Administration",
                  desc: "Completed intensive training in Linux system optimization, server security, and automation during internship.",
                  date: "July 2024",
                  icon: "🐧"
                },
                {
                  title: "CompTIA Security+ & Network+ Certified",
                  desc: "Achieved industry-recognized certifications in cybersecurity and networking fundamentals.",
                  date: "2024-2025",
                  icon: "🛡️"
                },
                {
                  title: "ProgVision Freelance Success",
                  desc: "Built and scaled freelance agency serving 200+ clients with web development and digital marketing services.",
                  date: "2022-Present",
                  icon: "💼"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="text-2xl mr-4 mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-1 text-sm">{item.desc}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center justify-center">
            <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
              <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            </span>
            Professional Certifications
          </h3>
          
          {Object.entries(groupedCertifications).map(([category, certs]) => (
            <div key={category} className="mb-8">
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                {category} Certifications
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {certs.map((cert, index) => (
                  <CertificationItem key={index} {...cert} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;