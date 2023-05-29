import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";

const initialState = {
    isAuth: false,
    user: {},
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        googleSignIn: (state) => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        },
    }
})

export const {googleSignIn} = authSlice.actions;
export default authSlice.reducer;