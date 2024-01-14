import Header from "../components/layout/Header";

const CreateSession = () => {
  return (
    <>
      <Header />
      <div className="landing-body">
      
        <div className=" session-form">
        <h6 className="subhead">Create a session for your team poll</h6>
        <h4>Session Name or Title</h4>
        <br/>
        <input type="text" placeholder="Session Title/Name" />
        <div className="radio-session">
          <label>Session Visibility</label>
          <br />
          <br />
          <input type="radio" name="visible" id="public" />
          <label for="public">Public Session (Accessible to anyone)</label>
          <br />
          <br />
          <input type="radio" name="visible" id="private" />
          <label for="private">Private Session (Joining will require password)</label>
        </div>
        <br/>
        <button className="create-session" disabled>Create Session</button>
        </div>
      </div>
    </>
  );
};
export default CreateSession;
