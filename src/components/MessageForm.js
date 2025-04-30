import React, { useState } from 'react';

const MessageForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ message, date });
    setMessage('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <textarea
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Save Message</button>
    </form>
  );
};

export default MessageForm;
