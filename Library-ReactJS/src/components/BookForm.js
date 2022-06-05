import React, { useState, useContext } from 'react';
import { Bookcontext } from '../contexts/BookContext';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    //    const{addBook}= useContext(Bookcontext);
    const { dispatch } = useContext(Bookcontext);
    const handleSubmit = (e) => {
        e.preventDefault();
        // addBook(title, author)
        dispatch({type:'ADD_BOOK', book:{
            title,author
        }})
        setAuthor('');
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="نام کتاب" value={title} required
                onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="نام نویسنده" value={author} required
                onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="ثبت کتاب" />
        </form>
    );
}

export default BookForm;