import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout.jsx';

import LoginPage from '../features/auth/LoginPage.jsx';
import RegisterPage from '../features/auth/RegisterPage.jsx';
import ForgotPasswordPage from '../features/auth/ForgotPasswordPage.jsx';
import DashboardPage from '../features/dashboard/DashboardPage.jsx';
import ProfilePage from '../features/dashboard/ProfilePage.jsx';
import CredentialsPortal from '../features/dashboard/CredentialsPortal.jsx';
import ChatWindow from '../features/chatbot/ChatWindow.jsx';
import CourseListPage from '../features/courses/CourseListPage.jsx';
import CourseDetailPage from '../features/courses/CourseDetailPage.jsx';
import QuizView from '../features/assessment/QuizView.jsx';
import QuizResultPage from '../features/assessment/QuizResultPage.jsx';
import CertificateView from '../features/assessment/CertificateView.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

export default function AppRoutes() {
    return (
        <PageLayout>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot" element={<ForgotPasswordPage />} />

                <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/credentials" element={<ProtectedRoute><CredentialsPortal /></ProtectedRoute>} />

                <Route path="/chatbot" element={<ProtectedRoute><ChatWindow /></ProtectedRoute>} />
                <Route path="/courses" element={<ProtectedRoute><CourseListPage /></ProtectedRoute>} />
                <Route path="/courses/:id" element={<ProtectedRoute><CourseDetailPage /></ProtectedRoute>} />
                <Route path="/quiz" element={<ProtectedRoute><QuizView /></ProtectedRoute>} />
                <Route path="/results" element={<ProtectedRoute><QuizResultPage /></ProtectedRoute>} />
                <Route path="/certificate" element={<ProtectedRoute><CertificateView /></ProtectedRoute>} />
            </Routes>
        </PageLayout>
    );
}
