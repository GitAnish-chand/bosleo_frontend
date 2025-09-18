export default function ContentView({ content }) {
    if (!content) return null;
    if (content.type === 'video') return <video controls src={content.src} style={{ width: '100%' }} />;
    return <div>{content.text || 'No content'}</div>;
}
