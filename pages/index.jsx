import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import MainScreen from '../components/MainScreen';
import CourtsList from './courts';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { firebaseApp } from './_app';

export default function Index() {
  const { user, isLoading } = useUser();
  const [courts, setCourts] = React.useState([]);
  React.useEffect(() => {
    const asyncFn = async () => {
      const db = getFirestore(firebaseApp);
      const nodes = await getDocs(collection(db, 'nodes'));
      setCourts(
        nodes.docs.map(node => {
          const { last_updated, ...nodeData } = node.data();
          nodeData.last_updated = last_updated.toDate().toString();
          nodeData.last_updated = nodeData.last_updated.substring(0, nodeData.last_updated.indexOf('GMT'));
          return {
            ...nodeData
          };
        })
      );
    };
    asyncFn();
  }, []);
  return (
    <>
      {!!user ? (
        <div>
          <CourtsList courts={courts} />
        </div>
      ) : (
        <MainScreen />
      )}
    </>
  );
}
