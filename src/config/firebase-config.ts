import * as admin from 'firebase-admin';

import { credentials } from './serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(credentials as any),
});

export default admin;
