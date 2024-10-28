import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaUsers, FaCalendar, FaCoins } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const Torneos = () => {
  const tournaments = [
    {
      id: 1,
      name: 'FIFA FC 24 Championship',
      game: 'FIFA FC 24',
      image: 'https://media.gq.com.mx/photos/66fd872173f54ba5830a877a/16:9/w_2560%2Cc_limit/EA_Sports_FC_25_cover.jpg',
      participants: 64,
      maxParticipants: 128,
      startDate: '2024-02-01',
      prizePool: 5000,
      entryFee: 50
    },
    {
      id: 2,
      name: 'Dragon Ball Tournament',
      game: 'Dragon Ball Sparking Zero',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/4KBDKEMQLRHCBBVHYEMFL5PPBU.jpg',
      participants: 32,
      maxParticipants: 64,
      startDate: '2024-02-15',
      prizePool: 2500,
      entryFee: 25
    },
    {
      id: 3,
      name: 'Warzone Battle Royale',
      game: 'Warzone',
      image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg',
      participants: 16,
      maxParticipants: 32,
      startDate: '2024-02-28',
      prizePool: 1000,
      entryFee: 15
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">SuperEvilMegacorp Tournaments</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="overflow-hidden">
            <img
              src={tournament.image}
              alt={tournament.game}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaTrophy className="text-yellow-500 h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <FaUsers className="h-5 w-5 mr-2" />
                  <span>{tournament.participants}/{tournament.maxParticipants} Players</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaCalendar className="h-5 w-5 mr-2" />
                  <span>{new Date(tournament.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaCoins className="h-5 w-5 mr-2" />
                  <span>Prize Pool: ${tournament.prizePool}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Entry Fee: ${tournament.entryFee}</span>
                <Button
                  disabled={tournament.participants >= tournament.maxParticipants}
                  variant={tournament.participants >= tournament.maxParticipants ? 'secondary' : 'primary'}
                >
                  {tournament.participants >= tournament.maxParticipants ? 'Full' : 'Join Tournament'}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Torneos;