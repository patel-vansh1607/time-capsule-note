import React from 'react';

const MessageDisplay = ({ messageData }) => {
  if (!messageData) return null;

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className="message-display">
      {currentDate >= messageData.date ? (
        <p><strong>Your Message:</strong> {messageData.message}</p>
      ) : (
        <p>🔒 Your message is locked until <strong>{messageData.date}</strong></p>
      )}
    </div>
  );
};

export default MessageDisplay;
