import Movie from './Movie';

const MoviesList = ({ movies }) => {
    return (
        <ul className='divide-y divide-gray-100'>
            {movies.map(movie => {
                return <Movie movie={movie} key={movie.id}/>
            })}
        </ul>
    );
};

export default MoviesList