import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { initSocket } from "../socket";


const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [socketInitialized, setSocketInitialized] = useState(false);

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new room");
  };
  const joinRoom = async () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & Username is required");
      return;
    }
    if (!socketInitialized) {
      await initSocket();
      setSocketInitialized(true);
    }

    navigate(`/editor/${roomId}`, {
      state: { username },
    });
  };

  const handleChangeEnter = (e) => {
    if (e.keyCode === '13') {
      //13 is the keycode for enter key
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <div className="homePageLogo">
          <h1>Codify</h1>
        </div>
        <h4 className="mainLabel">Enter invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleChangeEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleChangeEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <Link onClick={createNewRoom} className="createNewBtn">
              new room
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
