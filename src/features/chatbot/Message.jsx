export default function Message({ role, text }) {
    const isUser = role === 'user';
    return (
        <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: 6 }}>
            <div style={{ background: isUser ? '#e6f7ff' : '#f5f5f5', padding: 8, borderRadius: 8, maxWidth: '70%' }}>{text}</div>
        </div>
    );
}
