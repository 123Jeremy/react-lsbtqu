import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import React, { useState } from 'react';

import ChatBox from './ChatBox';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <ChatBox messages={messages} />
      {/* Ajoutez ici d'autres composants comme le champ de saisie */}
    </div>
  );
};

export default App;
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
