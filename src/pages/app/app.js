import Header from "../../components/layout/Header";

const AdminDashboard = () => {
  return (
    <>
      <Header hideCreateSession={true} html={<>Session Title</>} />
      <div className="app-body">
        <div className="app-menu">
          <div className="title">Session Title</div>
          <div className="session-detail">
            <>Session Code: dkdkdk </>
            <button className="copy-content">&#x2398;</button>
          </div>
          <div className="session-detail">
            <>Session Password: dkdkdk </>
            <button className="copy-content">&#x2398;</button>
          </div>
          <div className="session-detail">
            <>Joining Link - https://devferanmi.xyz/ </>
            <button className="copy-content">&#x2398;</button>
          </div>
          <div className="session-logs">
            <h6>Session Logs</h6>
            <div className="session-log">
              <div className="log-date">11:02</div>
              <div className="log-detail">Feranmi Joined</div>
            </div>
            <div className="session-log">
              <div className="log-date">11:02</div>
              <div className="log-detail">Feranmi Joined</div>
            </div>
          </div>

          <div className="create-poll">
            <input type="text" placeholder="Title for your poll" maxLength="20"/>
            <button className="create-poll-button" disabled>Start Poll</button>           
            <button className="start-poll">Start a Poll</button>
          </div>
        </div>
        <div className="session-members">
          <div className="session-member">
            <div className="key">N</div>
            <h6>Feranmi</h6>
          </div>

          <div className="session-member">
            <div className="key">P</div>
            <h6>James</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
