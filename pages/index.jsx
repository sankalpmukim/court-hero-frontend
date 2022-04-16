import React from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import MainScreen from '../components/MainScreen';

export default function Index() {
  const { user, isLoading } = useUser();
  return (
    <>
      {!!user ? (
        <div>
          Logged in as {JSON.stringify(user)}
          <MainScreen />
        </div>
      ) : (
        <MainScreen />
      )}
    </>
  );
}
