import { apiRequest } from './apiClient.js';

export const assessmentApi = {
    getQuiz: (id) => apiRequest(`/assessment/quizzes/${id}`),
    submitQuiz: (id, payload) => apiRequest(`/assessment/quizzes/${id}/submit`, { method: 'POST', body: JSON.stringify(payload) }),
};
