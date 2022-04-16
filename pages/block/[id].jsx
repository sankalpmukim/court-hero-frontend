import Head from 'next/head';
import { firebaseApp } from '../_app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const getServerSideProps = async ({ req, params: { id } }) => {
  const db = getFirestore(firebaseApp);
  // query firebase for the status of the current court(node)
  const nodeData = await getDoc(doc(db, `nodes/${id}`));
  if (nodeData.exists()) {
    const node = nodeData.data();
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
      <main>
        {/* Json stringify node */}
        <div>{JSON.stringify(node)}</div>
        <div class="div-block-4">
          <img
            src="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/625a3f9cb6cf80e0267bb779_Court%20HeroW.svg"
            loading="lazy"
            alt=""
            class="image-4"
          />
          <div class="text-block-3">Marketplace</div>
          <div class="text-block-3">Chat</div>
          <div class="text-block-3">Status</div>
          <a href="#" class="button-3 w-button">
            Sign Out
          </a>
        </div>
        <div class="div-block">
          <img
            src="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/625a2b83193e9d5d2cf55d0f_FC.svg"
            loading="lazy"
            alt=""
            class="image-2"
          />
        </div>
        <h1 class="heading-2a">Available</h1>
        <div class="text-block1">Last Checked at 4:20PM</div>
        <div class="text-block">
          <strong class="bold-text-2">Last Busy at 4:00PM</strong>
        </div>
        <div class="text-block-2">Click here for detailed view</div>
        <div class="div-block-2">
          <a href="#" class="button-2 w-button">
            <strong class="bold-text-3">Other Courts</strong>
          </a>
        </div>
      </main>
    </>
  );
};

export default BlockDetailView;
