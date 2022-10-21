import { initializeApp } from "firebase/app";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coursevegas.firebaseapp.com",
  projectId: "coursevegas",
};

export const fireApp = initializeApp(config);
