import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Groq AI Configuration
const GROQ_API_KEY = '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';
const GROQ_MODEL = 'llama-3.1-8b-instant';

const SYSTEM_PROMPT = `You are Pynatic AI, a helpful assistant for Pynatic - an IT solutions company based in Dabhoi, Gujarat, India.

About Pynatic:
- Services: Web Development, Desktop Applications, IoT Solutions, AI/ML Services
- Contact: pynatic079@gmail.com, +91 7984823759
- Hours: Mon-Sat, 9 AM - 6 PM IST
- Address: Shiv Smruti Bhawan, Dabhoi, Gujarat 391110
- Founder: Om Badhe CEO, Bhavan Badhe Co-Founder
Guidelines:
- restrict any query which is out of context.
- Be friendly, professional, and concise
- Help users understand Pynatic's services
- Encourage users to contact for quotes and project discussions
- Keep responses brief (2-3 sentences max unless they ask for details)`;

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm Pynatic AI. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const quickReplies = [
  'Tell me about your services',
  'How much does a website cost?',
  'Do you build mobile apps?',
  'Contact support',
];

async function callGroqAPI(messages: GroqMessage[]): Promise<string> {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: messages,
        max_tokens: 256,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error('Groq API error:', error);
    return "I'm having trouble connecting right now. Please email us at pynatic079@gmail.com for assistance.";
  }
}

const STORAGE_KEY = 'pynatic_ai_chat_history';

function loadMessages(): Message[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((msg: Message) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
  } catch {
    // Return default on error
  }
  return initialMessages;
}

function saveMessages(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // Ignore storage errors
  }
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(loadMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const clearHistory = () => {
    setMessages(initialMessages);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Build conversation history for Groq API
    const groqMessages: GroqMessage[] = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...messages.map((msg): GroqMessage => ({
        role: (msg.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: msg.text,
      })),
      { role: 'user' as const, content: text.trim() },
    ];

    // Call Groq API
    const responseText = await callGroqAPI(groqMessages);

    const botMessage: Message = {
      id: messages.length + 2,
      text: responseText,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-glow transition-all duration-300 ${isOpen
          ? 'bg-pynatic-text text-pynatic-bg'
          : 'bg-pynatic-lime text-pynatic-bg hover:bg-pynatic-lime-dark'
          }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] bg-pynatic-bg-secondary rounded-2xl border border-white/10 shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="bg-pynatic-lime/10 px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pynatic-lime/20 flex items-center justify-center">
                <Bot size={20} className="text-pynatic-lime" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-semibold text-pynatic-text">Pynatic AI</h4>
                <p className="text-xs text-pynatic-text-secondary">Always here to help</p>
              </div>
              <button
                onClick={clearHistory}
                title="Clear chat history"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-red-400 hover:bg-red-400/10 transition-all"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                      ? 'bg-pynatic-lime/20'
                      : 'bg-pynatic-lime/10'
                      }`}
                  >
                    {message.sender === 'user' ? (
                      <User size={14} className="text-pynatic-lime" />
                    ) : (
                      <Bot size={14} className="text-pynatic-lime" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${message.sender === 'user'
                      ? 'bg-pynatic-lime text-pynatic-bg rounded-br-md'
                      : 'bg-white/5 text-pynatic-text rounded-bl-md'
                      }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-pynatic-lime/10 flex items-center justify-center">
                    <Bot size={14} className="text-pynatic-lime" />
                  </div>
                  <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-pynatic-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-pynatic-text-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-pynatic-text-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="text-xs px-3 py-1.5 bg-white/5 text-pynatic-text-secondary rounded-full hover:bg-pynatic-lime/10 hover:text-pynatic-lime transition-all duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-pynatic-text placeholder:text-pynatic-text-secondary/50 focus:outline-none focus:border-pynatic-lime/50 transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-pynatic-lime flex items-center justify-center text-pynatic-bg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pynatic-lime-dark transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}