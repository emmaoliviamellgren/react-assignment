const Movie = ({ movie }) => {
    return (
        <li className='flex px-12 py-4 shadow-md shadow-gray-200'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='text-sm font-semibold leading-6 text-gray-900'>{movie.title}</p>
                    <p className='mt-1 truncate text-xs leading-5 text-gray-500'>{movie.director}</p>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='h-12 w-12'>
                        <img className='rounded-full h-full w-full object-cover shadow-md shadow-slate-500' src={movie.imageUrl} />
                    </div>
                </div>
            </div>
        </li>
    );
};
export default Movie;
