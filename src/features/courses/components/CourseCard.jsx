import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
    return (
        <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>{course.title || 'Untitled course'}</h3>
            <p>{course.description || 'No description'}</p>
            <Link to={`/courses/${course.id}`}>View</Link>
        </div>
    );
}
