const AVAIL = `Available`;
const SDOWN = `Server down`;
const BUSY = `Busy`;
const C_AVAIL = `avail`;
const C_SDOWN = `offline`;
const C_BUSY = `busy`;

const CSS_AVAIL = {
  background: 'linear-gradient(180deg, #00BEE8 0%, #3BCFFE 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent'
};

const CSS_SDOWN = {
  background: 'linear-gradient(180deg, #626262 0%, #1B1B1B 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent'
};

const CSS_BUSY = {
  background: 'linear-gradient(180deg, #D71A00 0%, #FE813B 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent'
};

const CourtDetail = ({ block, last_updated, people, awake }) => {
  const status = awake && !people ? AVAIL : !awake ? SDOWN : BUSY;
  const c_status = awake && !people ? C_AVAIL : !awake ? C_SDOWN : C_BUSY;
  const css = awake && !people ? CSS_AVAIL : !awake ? CSS_SDOWN : CSS_BUSY;

  const color = status === AVAIL ? '#00ff00' : status === SDOWN ? '#ff0000' : '#ffa500';
  return (
    <main
      style={{
        color
      }}>
      <div className="div-block-4">
        <img
          src="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/625a3f9cb6cf80e0267bb779_Court%20HeroW.svg"
          loading="lazy"
          alt=""
          className="image-4"
          onClick={() => {
            window.location.href = '/';
          }}
          style={{
            cursor: 'pointer'
          }}
        />
        <div className="text-block-3">Marketplace</div>
        <div className="text-block-3">Chat</div>
        <div className="text-block-3">Status</div>
        <a
          href="/api/auth/logout"
          className="button-3 w-button"
          style={{
            textDecoration: 'none',
            color: 'white'
          }}>
          Sign Out
        </a>
      </div>
      <div className="div-block">
        <img src={`/static/images/${block.toLowerCase()}-${c_status}.svg`} loading="lazy" alt="" className="image-2" />
      </div>
      {status === SDOWN ? (
        <h1
          className="heading-2a"
          style={{
            fontSize: '4rem',
            ...css
          }}>{`Server down`}</h1>
      ) : (
        <h1
          className="heading-2a"
          style={{
            fontSize: '4rem',
            ...css
          }}>
          Court {status}
        </h1>
      )}
      <div className="text-block1" style={{ ...css }}>
        Last Checked at {last_updated}
      </div>
      <div className="text-block">
        <strong className="bold-text-2" style={{ ...css }}>
          Last Busy at 4:00PM
        </strong>
      </div>
      <div className="div-block-2">
        <a
          href="/courts"
          className="button-2 w-button"
          style={{
            textDecoration: 'none',
            color: 'white'
          }}>
          <strong className="bold-text-3">Other Courts</strong>
        </a>
      </div>
    </main>
  );
};

export default CourtDetail;
