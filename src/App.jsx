import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header.jsx';
import BooksList from './components/BooksList.jsx';
import MoviesList from './components/MoviesList.jsx';

function App() {
    const [books, setBooks] = useState([
        {
            id: uuidv4(),
            title: 'The Great Gatsby',
            author: 'F Scott Fitzgerald',
            imageUrl: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1650456307/content-items/011/139/582/Great%2520Gatsby-01-original.jpg?1650456307',
        },
        {
            id: uuidv4(),
            title: 'Norwegian Wood',
            author: 'Haruki Murakami',
            imageUrl: 'https://cdn.kobo.com/book-images/39e21c1b-036d-4fa0-902d-4c99586a9103/1200/1200/False/norwegian-wood-3.jpg',
        },
        {
            id: uuidv4(),
            title: 'A Little Life',
            author: 'Hanya Yanagihara',
            imageUrl: 'https://bilder.akademibokhandeln.se/images_akb/9781447294832_383/a-little-life',
        },
    ]);

    const [movies, setMovies] = useState([
        {
            id: uuidv4(),
            title: 'Your Name Engraved Herein',
            director: 'Patrick Kuang-Hui Liu',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDAwZDAxYjktZmYwYi00Y2MyLTlmODgtNTNjZTRhYzk1NTAyXkEyXkFqcGdeQXVyNDY0NjQ1NDc@._V1_.jpg',
        },
        {
            id: uuidv4(),
            title: 'Lady Bird',
            director: 'Greta Gerwig',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
            id: uuidv4(),
            title: 'Interstellar',
            director: 'Christopher Nolan',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
    ]);

    return (
        <>
            <Header />
            <h1 className='px-12 py-6 text-xl font-semibold'>Books</h1>
            <MoviesList movies={movies} />
            <h1 className='px-12 py-6 text-xl font-semibold'>Movies</h1>
            <BooksList books={books} />
        </>
    );
}

export default App;
