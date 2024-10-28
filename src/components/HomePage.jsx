import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTrophy, FaUserFriends, FaInfoCircle } from 'react-icons/fa';

const HomePage = () => {
  const games = [
    {
      title: 'FIFA FC 24',
      image: 'https://media.gq.com.mx/photos/66fd872173f54ba5830a877a/16:9/w_2560%2Cc_limit/EA_Sports_FC_25_cover.jpg',
      description: 'Experience the beautiful game with next-gen graphics and gameplay',
    },
    {
      title: 'Dragon Ball Sparking Zero',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/4KBDKEMQLRHCBBVHYEMFL5PPBU.jpg',
      description: 'Ultimate fighting experience with your favorite Dragon Ball characters',
    },
    {
      title: 'Warzone',
      image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg',
      description: 'Battle Royale action in the Call of Duty universe',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-screen md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900">
        <img
  src="/.super-evil-megacorp-logo.webp"
  className="w-full h-full object-contain md:object-cover"
/>

        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              SuperEvilMegacorp Gaming
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Compete. Win. Dominate.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative pt-[56.25%]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <Link
                  to="/1vs1"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-200"
                >
                  Play Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaGamepad className="h-8 w-8" />}
            title="1v1 Matches"
            description="Challenge players in intense 1v1 battles"
            link="/1vs1"
          />
          <FeatureCard
            icon={<FaTrophy className="h-8 w-8" />}
            title="Tournaments"
            description="Join tournaments and win big prizes"
            link="/torneos"
          />
          <FeatureCard
            icon={<FaUserFriends className="h-8 w-8" />}
            title="Community"
            description="Connect with fellow gamers"
            link="/dashboard"
          />
          <FeatureCard
            icon={<FaInfoCircle className="h-8 w-8" />}
            title="About Us"
            description="Learn more about SuperEvilMegacorp"
            link="/sobreNosotros"
          />
        </div>
      </section>
    </div>
  );
};

// Subcomponente para cada tarjeta de característica
const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default HomePage;
