import { useCallback, useState } from 'react';

export function useApi(asyncFunction) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const call = useCallback(async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const result = await asyncFunction(...args);
            return result;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);

    return { call, loading, error };
}
