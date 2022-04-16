import Head from 'next/head';
import { firebaseApp } from '../_app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import CourtDetail from '../../components/CourtDetail';

export const getServerSideProps = async ({ req, params: { id } }) => {
  const db = getFirestore(firebaseApp);
  // query firebase for the status of the current court(node)
  const nodeData = await getDoc(doc(db, `nodes/${id}`));
  if (nodeData.exists()) {
    const { last_updated, ...node } = nodeData.data();
    node.last_updated = last_updated.toDate().toString();
    node.last_updated = node.last_updated.substring(0, node.last_updated.indexOf('GMT'));
    console.log('nodeData', node);
    return {
      props: {
        id,
        node
      }
    };
  } else {
    return {
      props: {
        id,
        error: 'Court does not exist'
      }
    };
  }
};

const BlockDetailView = ({ id, node }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Main</title>
        <meta content="Main" property="og:title" />
        <meta content="Main" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/css/court-hero-2a7cbd.webflow.861b28f5b.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CPoppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;subset=devanagari,latin,latin-ext"
          media="all"
        />
        <link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon" />
      </Head>
      {/* Json stringify node */}
      {/* <div>{JSON.stringify(node)}</div> */}
      <CourtDetail {...node} />
    </>
  );
};

export default BlockDetailView;
