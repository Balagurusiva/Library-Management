import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook, editBook, deleteBook, issueBook } from '../store/slices/booksSlice';
import Search from '../components/Search';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [editingId, setEditingId] = useState(null);
  const [editBookData, setEditBookData] = useState({ title: '', author: '' });
 
  //handle the inputs
  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value
    });
  };

 //add the book to store and clear the form(Create)
  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setNewBook({ title: '', author: '' });  
  };

  const startEditing = (book, index) => {
    setEditingId(index);
    setEditBookData({ title: book.title, author: book.author });
  };

  const handleEditChange = (e) => {
    setEditBookData({
      ...editBookData,
      [e.target.name]: e.target.value
    });
  };

  
 //save the edit(Update)
  const saveEdit = (index) => {
    dispatch(editBook({ index, details: editBookData }));
    setEditingId(null);
    setEditBookData({ title: '', author: '' });
  };

  return (
    <div className='flex justify-center items-center flex-col'>
        {/* header section */}
        <div className='flex w-full'>
            <button className='bg-blue-500 min-w-fit text-white p-2 rounded-md float-left' onClick={() => navigate('/')}>Back to Home</button>
            <h1 className='text-center mx-auto text-[30px]'>Books</h1>
        </div>
       
       {/* book form */}
      <form onSubmit={handleAddBook} className='flex justify-center items-center flex-col gap-4 w-[50%]'>
        <input
          className='p-2 mb-4 border-2'
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          className='p-2 mb-4 border-2'
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <button type="submit" className='p-2 rounded-lg bg-green-400'>Add Book</button>
      </form>
       
     {/* display the list of books(Read) */}
      <p className='text-center w-full text-[30px] mt-4'>List of Books on Store</p>
      <ul >
        {books.map((book, index) => (
          <li key={index} className='mt-2'>
            {editingId === index ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editBookData.title}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="author"
                  value={editBookData.author}
                  onChange={handleEditChange}
                />
                <button onClick={() => saveEdit(index)} className='p-2 ml-2 bg-green-400 rounded-lg'>Save</button>
                <button onClick={() => setEditingId(null)} className='p-2 ml-2 bg-red-400 rounded-lg'>Cancel</button>
              </>
            ) : (
              <>
                {book.title} by {book.author} 
                <button className='p-1 px-4 ml-5 bg-blue-400 rounded-lg' onClick={() => startEditing(book, index)}>Edit</button>
                {/* delete the book (Delete) */}
                <button className="p-1  px-4 ml-5 bg-red-400 rounded-lg" onClick={() =>dispatch(deleteBook(index))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Search />
    </div>
  );
}

export default Books;
