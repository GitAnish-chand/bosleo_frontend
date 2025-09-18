import { useState } from 'react';
import { chatbotApi } from '../../api/chatbotApi.js';
import Message from './Message.jsx';
import ChatInput from './ChatInput.jsx';

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);

    async function handleSend(text) {
        const userMsg = { role: 'user', text };
        setMessages((m) => [...m, userMsg]);
        try {
            const res = await chatbotApi.sendMessage({ message: text });
            setMessages((m) => [...m, { role: 'assistant', text: res?.reply || '...' }]);
        } catch (e) {
            setMessages((m) => [...m, { role: 'assistant', text: 'Error contacting chatbot' }]);
        }
    }

    return (
        <div>
            <div style={{ height: 300, overflow: 'auto', border: '1px solid #eee', padding: 8, marginBottom: 8 }}>
                {messages.map((m, i) => (
                    <Message key={i} role={m.role} text={m.text} />
                ))}
            </div>
            <ChatInput onSend={handleSend} />
        </div>
    );
}
