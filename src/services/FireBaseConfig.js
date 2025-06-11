import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJ3CRMTOchUQVY0EReiGPCn62fd3hO6L8",
  authDomain: "aula-27-6f248.firebaseapp.com",
  projectId: "aula-27-6f248",
  storageBucket: "aula-27-6f248.firebasestorage.app",
  messagingSenderId: "132388827121",
  appId: "1:132388827121:web:9979053d9f639501b99e50",
  measurementId: "G-CG47HTYLMH"
};

// Garante que o app não será inicializado mais de uma vez
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Exporta os serviços usados
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
