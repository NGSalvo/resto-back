import admin from '../../config/firebase-config';
import '../../customTypes';

export async function getUserRole(userEmail: string) {
  const userSnapshot = await admin
    .firestore()
    .collection('users')
    .where('email', '==', userEmail)
    .get();

  if (!userSnapshot.docs[0].exists) {
    return {};
  }

  return (userSnapshot.docs[0].data() as any)?.role;
}
