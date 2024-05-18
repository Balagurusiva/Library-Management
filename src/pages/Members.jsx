import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addMember, editMember, deleteMember } from '../store/slices/membersSlice';

const Members = () => {
    const navigate = useNavigate();
    const members = useSelector(state => state.members);
    console.log(members)
    const dispatch = useDispatch();
    const [newMember, setNewMember] = useState({ name: '', phone: '', address: '', debtAmount: '' });
    const [editingId, setEditingId] = useState(null);
    const [editMemberDetails, setEditMemberDetails] = useState({ name: '', phone: '', address: '', debtAmount: '' });

    //handle the inputs
    const handleInputChange = (e) => {
        setNewMember({
            ...newMember,
            [e.target.name]: e.target.value
        });
    }

    //add the memeber to store and clear the form (Creation)
    const handleAddMember = (e) => {
        e.preventDefault();
        dispatch(addMember(newMember));
        setNewMember({ name: '', phone: '', address: '', debtAmount: '' });
    }


    const startEditing = (member, index) => {
        setEditingId(index) ;
        setEditMemberDetails({ ...member });
    }

    const handleEditChange = (e) => {
        setEditMemberDetails({
            ...editMemberDetails,
            [e.target.name]: e.target.value
        });
    }

    //save the edit(Update)
    const saveEdit = (index) => {
        dispatch(editMember({index, details: editMemberDetails}))
        setEditingId(null);
        setEditMemberDetails({ name: '', phone: '', address: '', debtAmount: '' });
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            {/* header section */}
            <div className='flex w-full'>
                <button className='bg-blue-500 min-w-fit text-white p-2 rounded-md float-left' onClick={() => navigate('/')}>Back to Home</button>
                <h1 className='text-center mx-auto text-[30px]'>Members</h1>
            </div>

            {/* member form */}
            <form onSubmit={handleAddMember} className='flex justify-center items-center flex-col gap-4 w-[50%]'>
                <input
                    type="text"
                    name="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                    placeholder='Name'
                    required
                    className='p-2 mb-4 border-2'
                />
                <input
                    type="text"
                    name="phone"
                    value={newMember.phone}
                    onChange={handleInputChange}
                    placeholder='Phone'
                    required
                    className='p-2 mb-4 border-2'
                />
                <input
                    type="text"
                    name="address"
                    value={newMember.address}
                    onChange={handleInputChange}
                    placeholder='Address'
                    required
                    className='p-2 mb-4 border-2'
                />
                <input
                    type="text"
                    name="debtAmount"
                    value={newMember.debtAmount}
                    onChange={handleInputChange}
                    placeholder='Debt Amount'
                    required
                    className='p-2 mb-4 border-2'
                />
                <button type="submit" className='p-2 rounded-lg bg-green-400'>Add Member</button>
            </form>

            {/* display the list of members (Read) */}
            <p className='text-center w-full text-[30px] mt-4'>List of Members</p>
            <ul>
                {members.map((member, index) => (
                    <li key={index} className='mt-2'>
                        {editingId === index ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={editMemberDetails.name}
                                    onChange={handleEditChange}
                                    placeholder='Name'
                                    required
                                    className='p-2 mb-4 border-2'
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={editMemberDetails.phone}
                                    onChange={handleEditChange}
                                    placeholder='Phone'
                                    required
                                    className='p-2 mb-4 border-2'
                                />
                                <input
                                    type="text"
                                    name="address"
                                    value={editMemberDetails.address}
                                    onChange={handleEditChange}
                                    placeholder='Address'
                                    required
                                    className='p-2 mb-4 border-2'
                                />

                                <input
                                    type="text"
                                    name="debtAmount"
                                    value={editMemberDetails.debtAmount}
                                    onChange={handleEditChange}
                                    placeholder='Debt Amount'
                                    required
                                    className='p-2 mb-4 border-2'
                                />

                                <button onClick={() => saveEdit(index)} className='p-2 ml-2 bg-green-400 rounded-lg'>Save</button>
                                <button onClick={() => setEditingId(null)} className='p-2 ml-2 bg-red-400 rounded-lg'>Cancel</button>

                            </>
                        ) : (
                            <>
                                {member.name} - {member.phone} - {member.debtAmount}
                                <button className='p-1 px-4 ml-5 bg-blue-400 rounded-lg' onClick={() => startEditing(member, index)}>Edit</button>
                                {/* delete the book (Delete) */}
                                <button className="p-1  px-4 ml-5 bg-red-400 rounded-lg" onClick={() => dispatch(deleteMember(index))}>Delete</button>
                            </>)
                        }
                         
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default Members
