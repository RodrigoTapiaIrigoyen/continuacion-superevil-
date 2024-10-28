import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaDollarSign, FaUsers } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const OneVsOne = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const games = [
    {
      id: 1,
      name: 'FIFA FC 24',
      players: 1234,
      image: 'https://media.gq.com.mx/photos/66fd872173f54ba5830a877a/16:9/w_2560%2Cc_limit/EA_Sports_FC_25_cover.jpg'
    },
    {
      id: 2,
      name: 'Dragon Ball Sparking Zero',
      players: 856,
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/4KBDKEMQLRHCBBVHYEMFL5PPBU.jpg'
    },
    {
      id: 3,
      name: 'Warzone',
      players: 2341,
      image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg'
    }
  ];

  const amounts = [5, 10, 25, 50, 100];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">SuperEvilMegacorp 1v1 Matches</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card 
            key={game.id}
            className={`cursor-pointer transition-all duration-200 overflow-hidden ${
              selectedGame === game.id ? 'ring-2 ring-game-accent' : ''
            }`}
            onClick={() => setSelectedGame(game.id)}
          >
            <div className="relative">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                <span className="text-white font-bold">Select Game</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
              <div className="flex items-center text-gray-400">
                <FaUsers className="mr-2" />
                <span>{game.players.toLocaleString()} online</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Select Match Amount</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              className={`p-4 rounded-lg border ${
                selectedAmount === amount
                  ? 'border-game-accent bg-game-accent bg-opacity-20'
                  : 'border-gray-700 hover:border-game-accent'
              } transition-all duration-200`}
              onClick={() => setSelectedAmount(amount)}
            >
              <div className="flex items-center justify-center space-x-2">
                <FaDollarSign className="text-game-accent" />
                <span className="text-white font-bold">{amount}</span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <div className="flex justify-center mt-8">
        <Button
          disabled={!selectedGame || !selectedAmount}
          className="px-8 py-3"
        >
          Find Match
        </Button>
      </div>
    </div>
  );
};

export default OneVsOne;