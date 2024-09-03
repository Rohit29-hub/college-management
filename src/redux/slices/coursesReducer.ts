import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SyllabusItem {
    week: number;
    topic: string;
    content: string;
}

interface Student {
    id: number;
    name: string;
    email: string;
}

export interface courseType {
    id: number;
    name: string;
    instructor: string;
    description: string;
    enrollmentStatus: 'Open' | 'Closed' | 'In Progress';
    thumbnail: string;
    duration: string;
    schedule: string;
    location: string;
    prerequisites: string[];
    syllabus: SyllabusItem[];
    students: Student[];
}
interface courseState{
    courses: courseType[] | null
}

const initialState: courseState = {
    courses: null
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        addCourses: (state,action: PayloadAction<courseType[]>) => {
            state.courses = action.payload;
        }
    }
})


export const { addCourses } = courseSlice.actions
export default courseSlice.reducer