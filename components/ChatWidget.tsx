
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAi } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hi! I am the AiTrios strategy bot. How can I help automate your business today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMsg = message;
    setMessage('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Map current messages to the format expected by some history-based SDKs (though our service uses simple stateless for now)
      const aiResponse = await chatWithAi(userMsg, []);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse || "I'm processing that..." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Apologies, my circuits are a bit jammed. Try again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="glass-card w-[350px] h-[500px] rounded-2xl flex flex-col shadow-2xl border-primary/20 animate-reveal">
          <div className="p-4 bg-primary rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">robot_2</span>
              </div>
              <span className="text-white font-bold">AiTrios Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
              <span className="material-icons">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white/50 dark:bg-black/20 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/50 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-primary/10 flex gap-2">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-grow bg-white/40 dark:bg-black/20 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center glow-hover"
            >
              <span className="material-icons text-sm">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl glow-hover animate-bounce-slow"
        >
          <span className="material-symbols-outlined text-3xl">smart_toy</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
