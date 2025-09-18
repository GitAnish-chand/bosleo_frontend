import { useState } from 'react';

export default function ChatInput({ onSend }) {
    const [value, setValue] = useState('');

    function handleSend() {
        if (!value.trim()) return;
        onSend?.(value);
        setValue('');
    }

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type a message" style={{ flex: 1 }} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}
