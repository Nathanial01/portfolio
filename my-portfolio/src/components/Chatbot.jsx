import React, { useState } from 'react';
import './Chatbot.css'; // Make sure to add this CSS file

const Chatbot = () => {
  const [chatboxOpened, setChatboxOpened] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! How can I assist you today?',
      image: 'path/to/bot/profile.jpg', // Replace with your bot image path
    }
  ]);
  const [prompt, setPrompt] = useState('');

  // Toggle chatbox visibility
  const toggleChatbox = () => {
    setChatboxOpened(!chatboxOpened);
  };

  // Handle form submit (sending message)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    // Add user message to chat
    const userMessage = {
      type: 'user',
      text: prompt,
      image: 'path/to/user/profile.jpg' // Replace with your user profile image path
    };
    setMessages([...messages, userMessage]);
    setPrompt('');

    // Send message to chatbot API
    try {
      const response = await fetch('https://your-api-url.com/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      if (data.response) {
        // Add bot response to chat
        const botMessage = {
          type: 'bot',
          text: data.response,
          image: 'path/to/bot/profile.jpg' // Replace with your bot profile image path
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chatbot-container fixed bottom-6 right-6">
      {/* Chatbot Icon (Floating) */}
      <div
        id="chatbot-icon"
        className="bg-white hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg cursor-pointer transition transform hover:scale-110"
        onClick={toggleChatbox}
      >
        {/* Icon can be an SVG or any image */}
        <img src="path/to/chatbot/icon.svg" alt="Chatbot Icon" />
      </div>

      {/* Chatbox */}
      {chatboxOpened && (
        <div
          id="chatbox"
          className="fixed bottom-24 right-6 w-96 h-96 shadow-lg rounded-lg flex flex-col bg-white"
        >
          {/* Chat messages */}
          <div id="messages" className="messages flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-bubble ${message.type === 'user' ? 'user-message' : 'bot-message'} flex items-center mb-4`}
              >
                {message.type === 'bot' && <img src={message.image} alt="Bot" className="profile-picture mr-2" />}
                <span>{message.text}</span>
                {message.type === 'user' && <img src={message.image} alt="User" className="profile-picture ml-2" />}
              </div>
            ))}
          </div>

          {/* Chat input form */}
          <form id="chatbot-form" className="input-box flex" onSubmit={handleSubmit}>
            <input
              id="prompt"
              type="text"
              placeholder="Type your message and press Enter..."
              className="input-field flex-grow p-2 border border-gray-300 rounded-l"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit" className="send-button p-2 bg-green-600 text-white rounded-r">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
