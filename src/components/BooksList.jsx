import Book from './Book';

const BooksList = ({ books }) => {
    return (
        <ul className='divide-y divide-gray-100 '>
            {books.map((book) => {
                return <Book book={book} key={book.id} />;
            })}
        </ul>
    );
};

export default BooksList;

// const BooksList = ({ books }) => {

//     return (
//             <ul className='divide-y divide-gray-100'>

//                 {books.map((book) => (
//                     <Book book={book} key={book.id}/>
//                         <li className='flex justify-between px-12 py-4'>
//                             <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
//                                 <p className='text-sm leading-6 text-gray-900 font-semibold'>Betyg</p>
//                                 <p className='text-sm leading-6 text-gray-900'>5/5</p>
//                             </div>
//                         </li>
//                         <li className='flex justify-between px-12 py-4'>
//                                 <div className='min-w-0 flex-auto'>
//                                     <p className='text-sm font-semibold leading-6 text-gray-900'>{book}</p>
//                                     <p className='mt-1 truncate text-xs leading-5 text-gray-500'>Haruki Murakami</p>
//                                 </div>
//                             <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
//                                 <p className='text-sm leading-6 text-gray-900 font-semibold'>Betyg</p>
//                                 <p className='text-sm leading-6 text-gray-900'>5/5</p>
//                             </div>
//                         </li>
//                 ))}
//             </ul>
//     );
// };

// export default BooksList;
