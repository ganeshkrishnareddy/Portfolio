import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Users, Code, Zap, CheckCircle, ArrowLeft, ExternalLink, Award } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const AppDevelopment: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const offerings = [
    {
      title: "Cross-Platform App Development",
      description: "Build mobile apps that work seamlessly on both iOS and Android using modern frameworks like React Native and Flutter."
    },
    {
      title: "Backend API & Database Integration",
      description: "Robust backend infrastructure with REST or GraphQL APIs, integrated with cloud databases like Firebase or Supabase."
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Craft intuitive and engaging user experiences backed by research and wireframes."
    },
    {
      title: "Push Notifications & Analytics",
      description: "Implement push notifications, crash reporting, and user analytics for engagement and insights."
    },
    {
      title: "App Store & Play Store Deployment",
      description: "Assistance with publishing your app to Apple App Store and Google Play with complete compliance."
    },
    {
      title: "Ongoing Maintenance & Support",
      description: "Version upgrades, bug fixes, and long-term support after deployment."
    }
  ];

  const benefits = [
    "Faster time to market with reusable code",
    "Cost-effective cross-platform development",
    "Smooth performance and minimal bugs",
    "Scalable backend architecture",
    "Custom features tailored to your needs",
    "Post-deployment support and analytics"
  ];

  const techStack = [
    "React Native", "Flutter", "Firebase", "Supabase",
    "Node.js", "MongoDB", "Figma", "Expo", "GraphQL"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-
