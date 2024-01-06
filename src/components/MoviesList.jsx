import Movie from './Movie';

const MoviesList = ({ movies }) => {
    return (
        <ul className='mb-2 select-none'>
            {movies.map(movie => {
                return <Movie movie={movie} key={movie.id}/>
            })}
        </ul>
    );
};

export default MoviesList