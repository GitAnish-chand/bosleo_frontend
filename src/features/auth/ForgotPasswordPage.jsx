import { useState } from 'react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setMessage('If the email exists, a reset link was sent.');
    }

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Send reset link</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
