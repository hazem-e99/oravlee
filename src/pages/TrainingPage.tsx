import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaCloud, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface TrainingModule {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  schedule: string;
  prerequisites: string[];
}

const modules: TrainingModule[] = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Oracle Database Administration",
    description: "Master the fundamentals of Oracle database administration and management",
    topics: [
      "Database Architecture",
      "Backup and Recovery",
      "Performance Tuning",
      "Security Management",
      "High Availability",
      "Data Guard"
    ],
    duration: "4 weeks",
    level: "Intermediate",
    price: "$1,999",
    schedule: "Mon-Fri, 9:00 AM - 1:00 PM",
    prerequisites: [
      "Basic SQL knowledge",
      "Understanding of database concepts",
      "Linux/Unix basics"
    ]
  },
  {
    title: "Oracle Cloud Infrastructure",
    description: "Learn to deploy and manage applications on Oracle Cloud",
    topics: [
      "Cloud Architecture",
      "Virtual Machines",
      "Container Services",
      "Networking",
      "Storage Solutions",
      "Security & Compliance"
    ],
    duration: "3 weeks",
    level: "Advanced",
    price: "$2,499",
    schedule: "Mon-Fri, 2:00 PM - 6:00 PM",
    prerequisites: [
      "Cloud computing basics",
      "Networking fundamentals",
      "Linux administration"
    ]
  },
  {
    title: "Oracle Security",
    description: "Comprehensive security training for Oracle environments",
    topics: [
      "Access Control",
      "Encryption",
      "Audit Management",
      "Compliance",
      "Security Policies",
      "Threat Prevention"
    ],
    duration: "2 weeks",
    level: "Intermediate",
    price: "$1,799",
    schedule: "Mon-Fri, 10:00 AM - 2:00 PM",
    prerequisites: [
      "Database administration basics",
      "Security concepts",
      "Network security fundamentals"
    ]
  }
];

const TrainingPage = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredModules = selectedLevel 
    ? modules.filter(module => module.level === selectedLevel)
    : modules;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-4">Oracle Training Programs</h1>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setSelectedLevel(null)}
              className={`px-4 py-2 rounded-lg border ${
                selectedLevel === null 
                  ? 'border-2' 
                  : 'hover:border-2'
              }`}
            >
              All Levels
            </button>
            <button 
              onClick={() => setSelectedLevel('Beginner')}
              className={`px-4 py-2 rounded-lg border ${
                selectedLevel === 'Beginner' 
                  ? 'border-2' 
                  : 'hover:border-2'
              }`}
            >
              Beginner
            </button>
            <button 
              onClick={() => setSelectedLevel('Intermediate')}
              className={`px-4 py-2 rounded-lg border ${
                selectedLevel === 'Intermediate' 
                  ? 'border-2' 
                  : 'hover:border-2'
              }`}
            >
              Intermediate
            </button>
            <button 
              onClick={() => setSelectedLevel('Advanced')}
              className={`px-4 py-2 rounded-lg border ${
                selectedLevel === 'Advanced' 
                  ? 'border-2' 
                  : 'hover:border-2'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          {filteredModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden border"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
                    <p>{module.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 rounded-full text-sm border">
                      {module.level}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm border">
                      {module.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm border">
                      {module.price}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Course Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Schedule:</span>
                        <span>{module.schedule}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Duration:</span>
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Price:</span>
                        <span>{module.price}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      {module.prerequisites.map((prerequisite, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModule(activeModule === index ? null : index)}
                  className="mt-6 flex items-center gap-2 hover:underline"
                >
                  <span>View Topics</span>
                  {activeModule === index ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </button>

                {activeModule === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t"
                  >
                    <h3 className="text-lg font-semibold mb-4">Topics Covered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.topics.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="flex items-center gap-2 p-3 rounded-lg border"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <button className="w-full px-6 py-3 rounded-lg font-medium transition-colors border">
                        Enroll Now - {module.price}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TrainingPage; 
