import { create } from "zustand";
import { User } from "firebase/auth";

type UserStore = {
    user : null | User;
    setUser:(user:User | null )=>void;
}

const useAuthStore = create<UserStore>()(set =>({
    user:null,
    setUser: user => set({user}), 
    }));

export default useAuthStore;