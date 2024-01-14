import Header from "../components/layout/Header";

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <div className="landing-body">
        <h2>Unlock Team Consensus with ScrumPoll</h2>
        <h6 className="subhead">
          Empower your team to express opinions and preferences by <br />
          casting votes on a wide range of topics, whether it's prioritizing
          tasks,
          <br /> scheduling meetings, or even choosing the next team-building
          activity.
        </h6>
        <div className="landing-form">
          <button className="create-session">Create Session</button>
          <input type="text" placeholder="Enter a session code or link" />
          <button className="join-session" disabled={true}>
            Join
          </button>
        </div>
        <h6 className="subtext">
          Create sessions and share with your team to join in for polls
        </h6>
        <div className="public-sessions">
          <h4>Public Sessions (3)</h4>
          <div className="public-session-card">
            <div>
              <h6 className="session-name">Session Name</h6>
              <h6 className="session-code">Session Code</h6>
              <span className="session-tips">23 people are here</span>
            </div>
            <button className="join-session-card">Join</button>
          </div>
          <div className="public-session-card">
            <div>
              <h6 className="session-name">Session Name</h6>
              <h6 className="session-code">Session Code</h6>
            </div>
            <button className="join-session-card">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
