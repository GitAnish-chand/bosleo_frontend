import { apiRequest } from './apiClient.js';

export const learningApi = {
    getCourses: () => apiRequest('/learning/courses'),
    getCourseById: (id) => apiRequest(`/learning/courses/${id}`),
};
