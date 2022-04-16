const AVAIL = `Available`;
const SDOWN = `Server down`;
const BUSY = `Busy`;

const CourtDetail = ({ block, last_updated, people, awake }) => {
  const status = awake && !people ? AVAIL : !awake ? SDOWN : BUSY;
  const color = status === AVAIL ? '#00ff00' : status === SDOWN ? '#ff0000' : '#ffa500';
  return (
    <main
      style={{
        color
      }}>
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
          href="/api/auth/logout"
          class="button-3 w-button"
          style={{
            textDecoration: 'none',
            color: 'white'
          }}>
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
      {status === SDOWN ? (
        <h1 class="heading-2a">{`Server is down in ${block} :(`}</h1>
      ) : (
        <h1 class="heading-2a">
          {block} is {status}
        </h1>
      )}
      <div class="text-block1">Last Checked at {last_updated}</div>
      <div class="text-block">
        <strong class="bold-text-2">Last Busy at 4:00PM</strong>
      </div>
      <div class="text-block-2">Click here for detailed view</div>
      <div class="div-block-2">
        <a
          href="/courts"
          class="button-2 w-button"
          style={{
            textDecoration: 'none',
            color: 'white'
          }}>
          <strong class="bold-text-3">Other Courts</strong>
        </a>
      </div>
    </main>
  );
};

export default CourtDetail;
