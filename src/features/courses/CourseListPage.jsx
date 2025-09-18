import { useEffect, useState } from 'react';
import { learningApi } from '../../api/learningApi.js';
import CourseCard from './components/CourseCard.jsx';

export default function CourseListPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        learningApi.getCourses().then(setCourses).catch(() => setCourses([]));
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                {courses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                ))}
            </div>
        </div>
    );
}
