import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside style={{ width: 220, borderRight: '1px solid #eee', padding: 12 }}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/chatbot">Chatbot</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
