import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
    courseId: number;
    courseName: string;
    courseImage: string;
    courseMentor: string;
    enrollmentDate?: number;
    completionStatus: Record<number, 'Completed' | 'In Progress'>;
}

interface studentType {
    id: number;
    name: string;
    email: string;
    username: string;
    enrolledCourses: Course[] | null;
}

interface StudentState {
    student: studentType | null;
}

const initialState: StudentState = {
    student: null,
};

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudentDetails: (state, action: PayloadAction<Omit<studentType, 'enrolledCourses'>>) => {
            state.student = {
                id: Date.now(),
                name: action.payload.name ?? '',
                email: action.payload.email ?? '',
                username: action.payload.username ?? '',
                enrolledCourses: null,
            };
        },
        setEnrollCourse: (state, action: PayloadAction<Course[] | Course>) => {
            if (state.student) {
                if (Array.isArray(action.payload)) {
                    state.student.enrolledCourses = action.payload;
                } else {
                    if (state.student.enrolledCourses) {
                        state.student.enrolledCourses.push(action.payload);
                    } else {
                        state.student.enrolledCourses = [action.payload];
                    }
                }
            }
        }
    }
});

export const { addStudentDetails, setEnrollCourse } = studentSlice.actions;
export default studentSlice.reducer;
