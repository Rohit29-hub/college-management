import { createContext, useState, useContext, ReactNode } from 'react';
import { Course } from '../redux/slices/studentReducer';



interface EnrollContextProps {
    isModalVisible: boolean;
    selectedCourse: Course | null;
    showModal: () => void;
    hideModal: () => void;
    changeSelectedCourse: (data: Course) => void;
}


const EnrollContext = createContext<EnrollContextProps | undefined>(undefined);

export const EnrollProvider = ({ children }: { children: ReactNode }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCourse,setSelectedCourse] = useState<Course | null>(null);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
    const changeSelectedCourse = (data: Course) => setSelectedCourse(data);

    return (
        <EnrollContext.Provider value={{ isModalVisible, showModal, hideModal,changeSelectedCourse,selectedCourse}}>
            {children}
        </EnrollContext.Provider>
    );
};

export const useEnroll = (): EnrollContextProps => {
    const context = useContext(EnrollContext);
    if (!context) {
        throw new Error('useEnroll must be used within an EnrollProvider');
    }
    return context;
};
