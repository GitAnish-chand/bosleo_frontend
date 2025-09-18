import { apiRequest } from './apiClient.js';

export const chatbotApi = {
    sendMessage: (payload) => apiRequest('/chatbot/message', { method: 'POST', body: JSON.stringify(payload) }),
};
