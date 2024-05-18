import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const books = useSelector((state) => state.books);
    const members = useSelector((state) => state.members)
     
    const navigate = useNavigate();


    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-center text-4xl font-bold mt-4'>Library Mangament System</p>

            <div className='flex flex-row gap-[100px] mt-[40px] justify-center items-start'>
                <div className="list-books flex flex-col justify-center items-center">
                    <p className='text-2xl '>List of Books</p>

                    <ul>
                        {books.map((book, index) => (
                            <li key={index} className='mt-2'>
                                {index + 1}. {book.title} by {book.author} {book.issuedTo && `(Issued to ${book.issuedTo})`}
                            </li>
                        ))}
                    </ul>

                    <button className='bg-blue-500 mt-2 text-white p-2 rounded-md' onClick={() => navigate('/books')}>Go to books page</button>
                </div>
                <div className="list-members  ">
                    <p className='text-2xl'>List of Members</p>

                    <ul>
                        {members.map((member, index) => (
                            <li key={index} className='mt-2'>
                                {index}. {member.name} - {member.phone} - {member.debtAmount}
                            </li>
                        ))}
                    </ul>

                    <button className=' bg-blue-500 mt-2 text-white p-2 rounded-md' onClick={() => navigate('/members')}>Go to members page</button>
                </div>
            </div>

            <button className='bg-blue-500 mt-5 text-white p-2 rounded-md' onClick={() => navigate('/issuebook')}>Issue a book</button>
        </div>
    )
}

export default Home
