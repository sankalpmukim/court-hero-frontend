import Head from 'next/head';

const MainScreen = () => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Court Hero</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="/static/css/main.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:regular" media="all" />
        <link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon"></link>
      </Head>
      <main>
        <div className="nav">
          <img src="/static/images/logo-light.svg" loading="lazy" alt="" />
          <img src="/static/images/github-logo-faded.svg" loading="lazy" alt="" />
        </div>
        <div className="w-container">
          <img src="/static/images/logo-light.svg" loading="lazy" width="643" alt="" className="image" />
        </div>
        <h1 className="heading-3">Check. Trade. Play.</h1>
        <div className="div-block">
          <a
            href="/api/auth/login"
            className="button-3 w-button"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}>
            <strong>Get Started</strong>
          </a>
        </div>
        <div className="div-block-2">
          <img src="/static/images/half-court.svg" loading="lazy" alt="" className="image-2" />
        </div>
      </main>
    </>
  );
};

export default MainScreen;
