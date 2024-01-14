import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { JOIN_STAGES, SessionModes } from "../constants";

const JoinSession = () => {
  const [loading, setLoading] = useState(true);
  const [joinStage, setJoinStage] = useState(JOIN_STAGES.LOADING);
  const [message, setMessage] = useState("Setting up...");
    const [data, setData] = useState({ sessionID: "", sessionPassword: "", sessionMode: "" });
  useEffect(() => {
    return handlePageSetup();
  },[]);
  console.log(loading)
  const handlePageSetup = () => {
    const pathname = window.location.pathname;
    const path = pathname.split("join-session/")[1];
    const sessionID = path.split("/")[1];
    const sessionPassword = path.split("/")[2];
    const sessionMode = path.split("/")[0];
    let newData = { sessionID, sessionPassword, sessionMode }
    setData(newData);
    if(sessionMode === SessionModes.PRIVATE){
        return handlePasswordStage(newData)
    }
    return handleJoinSession(false)
  }
    const handlePasswordStage = (data) => {
        console.log("password stage")
        console.log(data)
        console.log(data.sessionPassword)
        if(data.sessionPassword === "na"){
            console.log("no password")
            setJoinStage(JOIN_STAGES.PASSWORD);
            setLoading(false);
            setMessage("");
            return;
        }
        // HANDLE join with password
        return handleJoinSession(true)
    }
    const handleJoinSession = (isPassword) => {
        setLoading(true);
    }
  return (
    <>
      <Header />
      <div className="landing-body">
        {loading ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="session-form">
            <h6 className="subhead">Join Session</h6>
            <br />
            <h4>This session is private and requires password</h4>
            <br />
            <input type="text" placeholder="Session Password" />
            &nbsp;&nbsp;<button className="create-session">Join Session</button>
            <br />
            <h4>{ message }</h4>
          </div>
        )}
      </div>
    </>
  );
};
export default JoinSession;
