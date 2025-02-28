import React, { useRef, useEffect } from 'react';
import { Bot, User, Clock, RefreshCw } from 'lucide-react';
import MessageContent from './MessageContent';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change or loading state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender === 'user' ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-xs opacity-75">You</span>
                    </div>
                    <div className="flex items-center ml-4 text-xs opacity-75">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <Bot className="h-4 w-4 mr-1" />
                      <span className="text-xs opacity-75">CDP Assistant</span>
                    </div>
                    <div className="flex items-center ml-4 text-xs opacity-75">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={`prose max-w-none ${message.sender === 'user' ? 'text-white' : 'text-gray-800'}`}>
                {message.sender === 'user' ? (
                  <p>{message.text}</p>
                ) : (
                  <MessageContent content={message.text} />
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <div className="flex items-center mb-1">
                <Bot className="h-4 w-4 mr-1" />
                <span className="text-xs text-gray-500">CDP Assistant</span>
              </div>
              <div className="flex items-center mt-2">
                <RefreshCw className="h-4 w-4 animate-spin text-blue-600 mr-2" />
                <span className="text-gray-500">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;