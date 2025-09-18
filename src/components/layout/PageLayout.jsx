import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

export default function PageLayout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 1, display: 'flex' }}>
                <Sidebar />
                <main style={{ flex: 1, padding: 16 }}>{children}</main>
            </div>
            <Footer />
        </div>
    );
}
