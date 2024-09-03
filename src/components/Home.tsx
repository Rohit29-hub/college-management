import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='flex items-center justify-center pt-3 w-full'>
            <Link to={'/courses'} className='underline text-lg'>
                Welcome to myTech
            </Link>
        </div>
    )
}

export default Home