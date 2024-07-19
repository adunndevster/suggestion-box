import React, { useEffect, useState } from 'react';
import ChatArea from './components/ChatArea';
import SidePanel from './components/SidePanel';
import { UserComment, Suggestion } from '../data/data';

const SuggestionBox: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);
  const [comments, setComments] = useState<UserComment[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/api/suggestions');
        const data = await response.json();
        setSuggestions(data.suggestions);
        // Load the first suggestion's conversation by default
        if (data.suggestions.length > 0) {
          const firstSuggestion = data.suggestions[0];
          setSelectedSuggestion(firstSuggestion);
          await getSelection(firstSuggestion.conversationId);
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    fetchSuggestions();
  }, []);

  const handleSuggestionClick = async (suggestion: Suggestion) => {
    setSelectedSuggestion(suggestion);
    await getSelection(suggestion.conversationId);
  };

  const getSelection = async (id: string) => {
    try {
      const response = await fetch(`/api/conversations?id=${id}`);
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div className='suggestion-box'>
      <SidePanel suggestions={suggestions} activeSuggestion={selectedSuggestion} onSuggestionClick={handleSuggestionClick} />
      <ChatArea suggestion={selectedSuggestion} comments={comments} />
    </div>
  );
};

export default SuggestionBox;
