import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import './App.css';

const App = () => {
  const [messageData, setMessageData] = useState(null);

  const handleFormSubmit = (data) => {
    setMessageData(data);
    localStorage.setItem('timeCapsule', JSON.stringify(data));
  };

  React.useEffect(() => {
    const stored = localStorage.getItem('timeCapsule');
    if (stored) {
      setMessageData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="app-container">
      <h1>⏳ Time Capsule Message Website</h1>
      <MessageForm onSubmit={handleFormSubmit} />
      <MessageDisplay messageData={messageData} />
    </div>
  );
};

export default App;
