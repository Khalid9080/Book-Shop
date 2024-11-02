import { useEffect, useState } from "react";
import Book from "../Book/Book";



const Books = () => {
    
    const [books,setBooks] = useState ([]);

    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);

 
    return (
        <div>
            <h2 className="text-5xl font-bold playfair-display text-center my-12">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {
                    books.map(book=> <Book key={book.bookId} book={book}></Book> )
                }
                
            </div>
        </div>

        /* -- API fetch kore data load korar jonno->
            - 1. state to store the books
            - 2. useEffect to fetch the data (external fucntionalities korar jonno)
            - 3. set the data to the books state

        */
    );
};

export default Books;