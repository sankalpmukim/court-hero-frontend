import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtMb0MUCW_Jz0TPs5ZheI9nK07jWX0OSg',
  authDomain: 'court-hero.firebaseapp.com',
  databaseURL: 'https://court-hero-default-rtdb.firebaseio.com',
  projectId: 'court-hero',
  storageBucket: 'court-hero.appspot.com',
  messagingSenderId: '173902511567',
  appId: '1:173902511567:web:b7803113291f0b0b9466ba'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
