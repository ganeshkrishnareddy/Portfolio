import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Trophy, ExternalLink } from 'lucide-react';

interface EducationItemProps {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({
  period,
  degree,
  institution,
  location,
  description,
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
          <div className="flex items-center" aria-label="Period">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
          <div className="flex items-center" aria-label="Location">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
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
}) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-start">
          <Award className="h-6 w-6 text-teal-500 mr-4 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">{title}</h3>
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">{issuer}</p>
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
                  <span className="font-medium">ID:</span> {credentialId}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    {link && (
      <div className="mt-4 flex justify-end">
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

const Education: React.FC = () => {
  const educationData = [
    {
      period: "August 2022 - Present",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India"
    },
    {
      period: "April 2020 - March 2022",
      degree: "Intermediate (79.4%)",
      institution: "Narayana Junior College",
      location: "Tirupati, Andhra Pradesh"
    },
    {
      period: "April 2019 - March 2020",
      degree: "10th Grade (98%)",
      institution: "Narayana EM High School",
      location: "Tirupati, Andhra Pradesh",
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
      title: "CompTIA Security+ CE",
      issuer: "CompTIA",
      date: "January 2025",
      expiryDate: "January 2028",
      credentialId: "QDR90YBSZJVQQKWS",
      link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=YLP7LZ44L706VHCZ"
    },
    {
      title: "QuickHeal Certified Digital Forensic Investigator",
      issuer: "Quick Heal Academy",
      date: "January 2025",
      credentialId: "LPU-0000-780553",
      link: "https://lms.quickhealacademy.com/certificates/verification/exam?id=LPU-0000-780553"
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
    },
    {
      title: "Summer Training on Linux System Administration",
      issuer: "Lovely Professional University – Centre for Professional Enhancement",
      date: "August 2024",
      credentialId: "Registration No: 12212186",
      link: "https://drive.google.com/file/d/1ZfYZAIalNs9-qdog4RvJONdAzibGeSUb/view?usp=sharing"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Education & <span className="text-teal-600 dark:text-teal-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            My academic journey and professional certifications that have shaped my knowledge and skills.
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
            <div>
              {educationData.map((edu, index) => (
                <EducationItem key={index} {...edu} isLast={edu.isLast || index === educationData.length - 1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                <Trophy className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </span>
              Achievements
            </h3>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md space-y-6 mb-8">
              {[
                {
                  title: "Linux System Optimization",
                  desc: "Improved system performance and security by automating tasks and configuring Linux servers during my internship at Red Hat.",
                  date: "December 2024"
                },
                {
                  title: "Security Certification Achievements",
                  desc: "Earned certifications including CompTIA Security+ CE and Network+ CE to strengthen foundational cybersecurity knowledge.",
                  date: "June 2024"
                },
                {
                  title: "Reliance Foundation Undergraduate Scholarship",
                  desc: "Selected for and awarded ₹2,00,000 scholarship from the Reliance Foundation.",
                  date: "January 2023"
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-1">{item.desc}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certificationData.map((cert, index) => (
              <CertificationItem key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
