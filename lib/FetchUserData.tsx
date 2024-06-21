import { auth, db } from '@/config/Config';
import { collection, getDocs, query, where } from 'firebase/firestore';

async function fetchUserData() {
  const user = auth.currentUser;

  if (user) {
    const userUid = user.uid;
    const userCollection = collection(db, 'blogs'); 
    const q = query(userCollection, where('uid', '==', userUid));
    

    try {
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map(doc => doc.data());
      console.log('User Data:', userData);
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  } else {
    console.log('No user is currently logged in.');
  }
}

export default fetchUserData;
