// import type { RootState } from "@/redux/store";
// import type { IUser } from "@/types";
// import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

// interface InitialState {
//     users: IUser[];
// }

// const initialState: InitialState = {
//     users: [
//         {
//             id: 'MYOjPYyWBIP7JeTVW-aGO',
//             name: 'Messi'
//         },
//         {
//             id: '0lRR3xp37q7dgxiMDmtOX',
//             name: 'Ronaldo'
//         }
//     ],
// }

// type DraftUser = Pick<IUser, "name">;

// const createUser = (userData: DraftUser): IUser => {
//     return { id: nanoid(), ...userData }
// }

// const userSlice = createSlice({
//     name: "user",
//     initialState: initialState,
//     reducers: {
//         addUser: (state, action: PayloadAction<IUser>) => {
//             const userData = createUser(action.payload);
//             console.log('userData', userData);
//             state.users.push(userData);
//         },
//         removeUser: (state, actions: PayloadAction<string>) => {
//             state.users = state.users.filter((user) => user.id !== actions.payload)
//         }
//     }
// })

// export const selectUsers = (state: RootState) => {
//     return state.user.users;
// }

// export const { addUser, removeUser } = userSlice.actions;

// export default userSlice.reducer;