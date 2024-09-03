import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CourseCard from './ui/CourseCard';
import { useEffect, useMemo, useState } from 'react';

const Course = () => {
    const { courses } = useSelector((state: RootState) => state.courses);
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredCourses = useMemo(() => {
        if (!courses) return [];
        return courses.filter(course =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [courses, searchTerm]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        setSearchTerm('');
    }, [courses]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div>
                <input
                    id="search"
                    type="text"
                    placeholder="Search course"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCourses ? filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                )) : <p>Loading....</p>}
            </div>
        </div>
    )
}

export default Course