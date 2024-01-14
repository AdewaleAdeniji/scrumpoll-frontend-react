const Header = ({ hideCreateSession, html }) => {
  return (
    <div className="app-header">
      <h3>ScrumPoll</h3>
      {hideCreateSession ? (
        html
      ) : (
        <button className="create-session top">Create Session</button>
      )}
    </div>
  );
};
export default Header;
