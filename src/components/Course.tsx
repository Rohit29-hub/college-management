import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CourseCard from './ui/CourseCard';

const Course = () => {
    const { courses } = useSelector((state: RootState) => state.courses);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses && courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default Course