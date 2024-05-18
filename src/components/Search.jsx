import React, { useState } from 'react';
import { useSelector } from 'react-redux'; 

const Search = () => {
    const books = useSelector((state) => state.books);
    const [searchTerm, setSearchTerm] = useState(''); 

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value) 
    // }

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase() == searchTerm.toLowerCase() || book.author.toLowerCase() == searchTerm.toLowerCase()
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by book name or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border rounded"
            />
            {/* <button onClick={handleSearch}>search</button> */}
            

            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>

             
        </div>
    );
}

export default Search;

