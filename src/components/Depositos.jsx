import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCreditCard, FaPaypal, FaBitcoin, FaDollarSign } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const Depositos = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentMethods = [
    { id: 'card', name: 'Credit Card', icon: <FaCreditCard className="h-6 w-6" /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal className="h-6 w-6" /> },
    { id: 'crypto', name: 'Cryptocurrency', icon: <FaBitcoin className="h-6 w-6" /> }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle deposit logic here
    console.log('Deposit:', { amount, paymentMethod });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">SuperEvilMegacorp Deposits</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-white mb-2">Amount</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaDollarSign className="text-gray-400" />
              </div>
              <input
                type="number"
                min="5"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-game-primary border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-game-accent focus:border-transparent"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-4">Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 rounded-lg border ${
                    paymentMethod === method.id
                      ? 'border-game-accent bg-game-accent bg-opacity-20'
                      : 'border-gray-700 hover:border-game-accent'
                  } transition-all duration-200`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-game-accent">{method.icon}</div>
                    <span className="text-white">{method.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!amount || !paymentMethod}
          >
            Deposit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Depositos;