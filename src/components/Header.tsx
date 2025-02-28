import React from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-4xl mx-auto flex items-center">
        <Bot className="h-8 w-8 text-blue-600 mr-3" />
        <h1 className="text-xl font-bold text-gray-800">CDP Assistant</h1>
      </div>
    </header>
  );
};

export default Header;