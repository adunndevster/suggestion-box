import React from 'react';
import ChatArea from './components/ChatArea';
import SidePanel from './components/SidePanel';

const SuggestionBox: React.FC = () => {
  return <div className='suggestion-box'>
    <SidePanel />
    <ChatArea />
    </div>
};

export default SuggestionBox;