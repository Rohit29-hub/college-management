import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between">
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/courses" className="hover:text-gray-300">Courses</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </nav>
                <Link to={'/dashboard'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Dashboard
                </Link>
            </div>
        </header>
    );
};

export default Header;
