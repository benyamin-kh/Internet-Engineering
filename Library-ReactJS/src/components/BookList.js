import React, {useContext} from 'react';
import { Bookcontext } from '../contexts/BookContext';
import BookDetail from './BookDetails';

const BookList = () => {
   const{books} = useContext(Bookcontext)
    return books.length?(
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return(
                        <BookDetail key={book.id} book={book} />
                    )
                })}
            </ul>
        </div> 

     ):(
         <div className="empty">هیچ کتابی یافت نشد :)</div>
     )
}
 
export default BookList;