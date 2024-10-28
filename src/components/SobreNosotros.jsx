import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTrophy, FaShieldAlt, FaUsers } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const SobreNosotros = () => {
  const features = [
    {
      icon: <FaGamepad />,
      title: 'Competitive Gaming',
      description: 'Join intense 1v1 matches in our most popular games'
    },
    {
      icon: <FaTrophy />,
      title: 'Regular Tournaments',
      description: 'Participate in daily and weekly tournaments with big prizes'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Platform',
      description: 'Advanced security measures to protect your account and funds'
    },
    {
      icon: <FaUsers />,
      title: 'Growing Community',
      description: 'Join thousands of active gamers in our thriving community'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">About SuperEvilMegacorp</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          At SuperEvilMegacorp, we're dedicated to creating the ultimate competitive gaming
          platform where players can showcase their skills, compete for prizes, and become
          part of a thriving gaming community. Our platform is built on the principles of
          fair play, transparency, and continuous innovation.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6">
            <div className="text-game-accent text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-game-accent rounded-full mr-3"></span>
              Fair and competitive matchmaking
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-game-accent rounded-full mr-3"></span>
              Secure payment processing
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-game-accent rounded-full mr-3"></span>
              24/7 customer support
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-game-accent rounded-full mr-3"></span>
              Regular tournaments and events
            </li>
          </ul>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <div className="space-y-4 text-gray-300">
            <p>Have questions or feedback? We'd love to hear from you!</p>
            <div>
              <strong className="block text-white">Email:</strong>
              <a href="mailto:support@superevilmegacorp.com" className="text-game-accent hover:text-game-accent/80">
                support@superevilmegacorp.com
              </a>
            </div>
            <div>
              <strong className="block text-white">Discord:</strong>
              <a href="#" className="text-game-accent hover:text-game-accent/80">
                Join our Discord community
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SobreNosotros;