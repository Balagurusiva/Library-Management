import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { issueBook } from '../store/slices/booksSlice';  
import { useNavigate } from 'react-router-dom';

const IssueBook = () => {
  const [bookIndex, setBookIndex] = useState('');
  const [memberId, setMemberId] = useState('');
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const navigate = useNavigate();

  const handleIssueBook = () => {
    if (bookIndex !== '' && memberId !== '') {
      dispatch(issueBook({ index: parseInt(bookIndex), memberId }));
      setBookIndex('');
      setMemberId('');
    } else {
      alert('Please enter both book index and member ID.');
    }
  };

  return (
    <div className="issue-book-container flex flex-col justify-center items-center">
      <div className='flex w-full'>
            <button className='bg-blue-500 min-w-fit text-white p-2 rounded-md float-left' onClick={() => navigate('/')}>Back to Home</button>
            <h1 className='text-center mx-auto text-[30px]'>Issue Book</h1>
        </div>
      <div>
        <label htmlFor="bookIndex">Book Index:</label>
        <input
          type="text"
          id="bookIndex"
          value={bookIndex}
          onChange={(e) => setBookIndex(e.target.value)}
          placeholder="Enter book index"
          className='p-2 border-2 mt-2'
        />
      </div>
      <div>
        <label htmlFor="memberId">Member Index:</label>
        <input
          type="text"
          id="memberId"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          placeholder="Enter member index"
          className='p-2 border-2 mt-2'
        />
      </div>
      <button onClick={handleIssueBook} className='bg-green-400 text-white p-2 rounded-md mt-2'>Issue Book</button>
    </div>
  );
};

export default IssueBook;
