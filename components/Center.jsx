// React element to center it's children

const Center = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    {children}
  </div>
);

export default Center;
