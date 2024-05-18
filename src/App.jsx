import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
import Members from './pages/Members';
import IssueBook from './pages/IssueBook';

function App() {
     

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/books' element={<Books />} />
                    <Route path='/members' element={<Members />} />
                    <Route path='/issuebook' element={<IssueBook />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
