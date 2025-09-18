export default function ProgressBar({ percent = 0 }) {
    const value = Math.max(0, Math.min(100, Number(percent) || 0));
    return (
        <div style={{ height: 8, background: '#f0f0f0', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${value}%`, height: '100%', background: '#1677ff' }} />
        </div>
    );
}
