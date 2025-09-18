const BASE_URL = import.meta.env.VITE_API_GATEWAY_URL || '';

export async function apiRequest(path, options = {}) {
    const url = `${BASE_URL}${path}`;
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
        const message = await response.text().catch(() => response.statusText);
        throw new Error(message || `Request failed with ${response.status}`);
    }
    const contentType = response.headers.get('content-type') || '';
    return contentType.includes('application/json') ? response.json() : response.text();
}
