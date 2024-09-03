import { Link } from 'react-router-dom'
import { courseType } from '../../redux/slices/coursesReducer'
import { useEnroll } from '../../context/EnrollModalProvider';

const CourseCard = ({ course }: {
    course: courseType
}) => {
    const { showModal, changeSelectedCourse} = useEnroll();
    
    return (
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-48 object-cover" src={course.thumbnail} alt={course.name} />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">{course.name}</h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center mb-4">
                        <span className="font-medium text-gray-700">Instructor:</span>
                        <span className="ml-2 text-gray-800">{course.instructor}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="font-medium text-gray-700">Duration:</span>
                        <span className="ml-2 text-gray-800">{course.duration}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="font-medium text-gray-700">Schedule:</span>
                        <span className="ml-2 text-gray-800">{course.schedule}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="font-medium text-gray-700">Location:</span>
                        <span className="ml-2 text-gray-800">{course.location}</span>
                    </div>
                    <div className="mb-4">
                        <span className="font-medium text-gray-700">Prerequisites:</span>
                        <ul className="list-disc ml-5 text-gray-800">
                            {course.prerequisites.map((prerequisite, index) => (
                                <li key={index}>{prerequisite}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button onClick={() => {
                            changeSelectedCourse({
                                courseName: course.name,
                                courseMentor: course.instructor,
                                courseId: course.id,
                                courseImage: course.thumbnail,
                                enrollmentDate: Date.now(),
                                completionStatus: {}
                            })
                            showModal();
                        }} className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300">
                            Enroll Now
                        </button>
                        <Link to={`/courses/${course.name}/${course.id}`} className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        )
}

export default CourseCard