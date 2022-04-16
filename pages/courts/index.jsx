import Head from 'next/head';
import { firebaseApp } from '../_app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useUser } from '@auth0/nextjs-auth0';

const AVAIL = `Available`;
const SDOWN = `Server down`;
const BUSY = `Busy`;

export const getServerSideProps = async () => {
  const db = getFirestore(firebaseApp);
  const nodes = await getDocs(collection(db, 'nodes'));
  return {
    props: {
      courts: nodes.docs.map(node => {
        const { last_updated, ...nodeData } = node.data();
        nodeData.last_updated = last_updated.toDate().toString();
        nodeData.last_updated = nodeData.last_updated.substring(0, nodeData.last_updated.indexOf('GMT'));
        return {
          ...nodeData
        };
      })
    }
  };
};
const CourtsList = ({ courts }) => {
  const { user } = useUser();
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
      <main>
        <div class="div-block-4">
          <img
            src="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/625a3f9cb6cf80e0267bb779_Court%20HeroW.svg"
            loading="lazy"
            alt=""
            class="image-4"
            onClick={() => {
              window.location.href = '/';
            }}
            style={{
              cursor: 'pointer'
            }}
          />
          <div class="text-block-3">Marketplace</div>
          <div class="text-block-3">Chat</div>
          <div class="text-block-3">Status</div>
          <a
            href={`/api/auth/${!!user ? 'logout' : 'login'}`}
            class="button-3 w-button"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}>
            {!!user ? 'Logout' : 'Login'}
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          <h1>Badminton Courts</h1>{' '}
          <table class="styled-table">
            <thead>
              <tr>
                <th>Court</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {courts.map(court => {
                const { people, awake } = court;
                const status = awake && !people ? AVAIL : !awake ? SDOWN : BUSY;
                const color = status === AVAIL ? 'rgba(177, 255, 255, 1)' : status === SDOWN ? '#E2E2E2' : '#FFC5A4';
                return (
                  <tr
                    style={{ backgroundColor: color, cursor: 'pointer' }}
                    onClick={() => {
                      window.location.href = `/courts/${Number(court.id)}`;
                    }}>
                    <td>
                      {court.block}, {Number(court.index) + 1}
                    </td>
                    <td>{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default CourtsList;
