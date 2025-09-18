import { useState } from 'react';
import { authApi } from '../../api/authApi.js';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await authApi.register({ email, password }).catch((err) => ({ error: err.message }));
        setMessage(res?.error ? res.error : 'Registered');
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Create account</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
