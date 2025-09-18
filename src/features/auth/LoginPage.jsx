import { useState } from 'react';
import { authApi } from '../../api/authApi.js';
import { useAuth } from '../../hooks/useAuth.js';

export default function LoginPage() {
    const { setToken, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        try {
            const data = await authApi.login({ email, password });
            setToken(data.token);
            setUser(data.user);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}
