import { defineStore } from "pinia";
import { useAuth } from "@vueuse/firebase/useAuth";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  type User,
} from "firebase/auth";

const { isAuthenticated, user } = useAuth(getAuth(fireApp));

interface IState {
  isAuthenticated: boolean;
  user: User | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): IState => ({
    isAuthenticated: isAuthenticated.value,
    user: user.value,
  }),

  getters: {},

  actions: {
    login: async function () {
      const auth = getAuth();
      const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());
    },
    getAuthState: async function () {
      this.isAuthenticated = isAuthenticated.value;
      this.user = user.value;
    },
  },
});
