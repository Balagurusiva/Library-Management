import { createSlice } from "@reduxjs/toolkit";

export const membersSlice = createSlice({
    name: 'members',
    initialState: [],
    reducers: {
        addMember: (state, action) => {
            state.push(action.payload);
        },
        editMember: (state, action) => {
            const {index, details} = action.payload;
            state[index] = details;
        },
        deleteMember: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
});

export const { addMember, editMember, deleteMember } = membersSlice.actions;

export default membersSlice.reducer;

