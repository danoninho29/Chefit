import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import { useAuth } from '../hooks/useAuth';

const ProfileScreen = () => {
  
}
//   const { user } = useAuth(); // Assume que o hook retorna o usuário logado
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user) setLoading(false);
//   }, [user]);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {user?.photoURL && (
//         <Image source={{ uri: user.photoURL }} style={styles.avatar} />
//       )}
//       <Text style={styles.name}>{user.displayName || 'Usuário sem nome'}</Text>
//       <Text style={styles.email}>{user.email}</Text>
//       <Text style={styles.info}>ID: {user.uid}</Text>
//     </View>
//   );
// };

export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   email: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 10,
//   },
//   info: {
//     fontSize: 14,
//     color: '#888',
//   },
// });
