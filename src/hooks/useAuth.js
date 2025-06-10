// import { useEffect, useState } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../services/firebaseConfig'; //arquivo de config do Firebase

// export const useAuth = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { user };
// };
