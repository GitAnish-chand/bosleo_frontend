export default function LoadingSpinner({ label = 'Loading...' }) {
    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 16, height: 16, border: '2px solid #ddd', borderTopColor: '#333', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            <span>{label}</span>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}
