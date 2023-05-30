import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";



export const LoginByGoogle = createAsyncThunk("users/log", async ()=>{
    const provider = new GoogleAuthProvider();
    await  signInWithPopup(auth, provider);
    console.log("ok google");
})

export const logOut = ()=> {
    signOut(auth);
}


export const isAuthByGoogle = createAsyncThunk("users/auth", async ()=>{
    onAuthStateChanged(auth,async(currentUser)=> {
    const p = currentUser;
    return p;
   });
   console.log(p);
})

const initialState = {
    isAuth: false,
    user: [],
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // isAuthByGoogle: (state) => {
        //   onAuthStateChanged(auth, currentUser);
        // },
    },extraReducers: (builder) => {
        builder
        .addCase(LoginByGoogle.pending, (state)=>{
            state.isAuth = false;
        })
        .addCase(LoginByGoogle.rejected, (state)=>{
            state.isAuth = false;
        })
        .addCase(LoginByGoogle.fulfilled, (state)=>{
            state.isAuth = true;
        })
        .addCase(isAuthByGoogle.pending, (state)=>{
            state.isAuth = false;
        })
        .addCase(isAuthByGoogle.rejected, (state)=>{
            state.isAuth = false;
        })
        .addCase(isAuthByGoogle.fulfilled, (state, actions)=>{
            console.log(actions.payload);
            state.user.push(actions.payload)
            state.isAuth = true;
        })

    }
})

// export const {isAuthByGoogle} = authSlice.actions;
export default authSlice.reducer;