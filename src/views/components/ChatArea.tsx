import React, { useEffect, useState } from 'react';

const ChatArea: React.FC = () => {

  const [suggestions, setSuggestions] = useState<{ id: string, title: string, description: string, timestamp: Date }[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        console.log('dsd')
        const response = await fetch('/api/conversations?id=1');
        console.log(response)
        const data = await response.json();
        setSuggestions(data.suggestions);
        debugger;
        console.log(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    fetchSuggestions();
  }, []);
  
  return <div className='chat-area'></div>;
};

export default ChatArea;