import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;