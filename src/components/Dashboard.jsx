import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTrophy, FaWallet, FaChartLine } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const Dashboard = () => {
  const stats = [
    { icon: <FaGamepad />, title: 'Matches Played', value: '157' },
    { icon: <FaTrophy />, title: 'Tournaments Won', value: '12' },
    { icon: <FaWallet />, title: 'Total Earnings', value: '$2,450' },
    { icon: <FaChartLine />, title: 'Win Rate', value: '68%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">SuperEvilMegacorp Dashboard</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="flex flex-col items-center p-6">
            <div className="text-game-accent text-3xl mb-4">{stat.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
            <p className="text-2xl font-bold text-game-accent">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-game-primary rounded-lg">
            <span className="text-white">Won 1v1 Match</span>
            <span className="text-game-accent">+$50</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-game-primary rounded-lg">
            <span className="text-white">Tournament Participation</span>
            <span className="text-game-accent">+$200</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-game-primary rounded-lg">
            <span className="text-white">Weekly Challenge Completed</span>
            <span className="text-game-accent">+$75</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;