import { Outlet } from 'react-router-dom';
import EnrollModal from './EnrollModal'
import Header from './ui/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCourses } from '../redux/slices/coursesReducer';
import axios from 'axios';
import { addStudentDetails, setEnrollCourse } from '../redux/slices/studentReducer';

const Layout = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const storedData = localStorage.getItem('products');
            let courses = [];

            if (storedData) {
                courses = JSON.parse(storedData);
            } else {
                const response = await axios.get('https://66c9be6659f4350f064d509c.mockapi.io/api/v1/courses');
                courses = response.data;
                localStorage.setItem('products', JSON.stringify(courses));
            }

            dispatch(addCourses(courses));
        } catch (err) {
            console.error(err);
        }
    };

    const setStudentData = () => {
        const studentData = JSON.parse(localStorage.getItem('student')!);
        if(studentData){
            dispatch(addStudentDetails(studentData))
        }
    }

    const getEnrollCourses = () => {
        const enrollCourse = JSON.parse(localStorage.getItem('enroll_courses')!);
        if(enrollCourse){
            dispatch(setEnrollCourse(enrollCourse));
        }
    }

    useEffect(() => {
        fetchData();
        setStudentData();
        getEnrollCourses();
    }, [])
    return (
        <div>
            <EnrollModal />
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout